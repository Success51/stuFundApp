import React, { useState } from 'react';
import '../styles/Campaigns.css';
import { Link } from 'react-router-dom';
import Web3 from 'web3';

const campaignsData = [
    {
        name: 'John Doe',
        goal: 5000,
        raised: 3000,
        description: 'Help John pay for his university tuition.',
        campaignerAddress:'0xFAD1F88fE055e3670439e9c04AB2D3D768f6b891',
    },
    {
        name: 'Jane Smith',
        goal: 8000,
        raised: 5500,
        description: 'Support Jane in completing her medical degree.',
        campaignerAddress: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
    },
    {
        name: 'Amir Khan',
        goal: 200000,
        raised: 9000,
        description: 'Ab toh aapne gole pe chala jaunga.',
        campaignerAddress:'0xFAD1F88fE055e3670439e9c04AB2D3D768f6b891',
    },
    {
        name: 'Salman Khan',
        goal: 15000,
        raised: 7500,
        description: 'Fund Michael’s graduate studies in law.',
        campaignerAddress:'0xFAD1F88fE055e3670439e9c04AB2D3D768f6b891',
    },
    {
        name: 'Sharukh Khan',
        goal: 15000,
        raised: 7500,
        description: 'Har kar jitne wale ko bazigar kehete hai , aur bhik magne wale ko beggar kehete hai .',
        campaignerAddress:'0xFAD1F88fE055e3670439e9c04AB2D3D768f6b891',
    },
    {
        name: 'Bill Gates',
        goal: 150,
        raised: 10,
        description: 'Need money to drink Chai.',
        campaignerAddress:'0xFAD1F88fE055e3670439e9c04AB2D3D768f6b891',
    },
    {
        name: 'Elon Musk',
        goal: 10000000,
        raised: 1000453,
        description: 'Elon Musk wants to make X.com.',
        campaignerAddress:'0xFAD1F88fE055e3670439e9c04AB2D3D768f6b891',
    },
    {
        name: 'Akshay Kumar',
        goal: 100,
        raised: 50,
        description: 'Fund Me to make a flop movie.',
        campaignerAddress:'0xFAD1F88fE055e3670439e9c04AB2D3D768f6b891',
    },
];

const Campaigns = ({ limit }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [donateValue, setDonateValue] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [ethAmount, setEthAmount] = useState(0);
    
    const fetchEthAmount = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
            const data = await response.json();
            const ethPriceInUsd = data.ethereum.usd;
            setEthAmount((1 / ethPriceInUsd) * donateValue); // Calculate ETH amount equivalent to donation value
        } catch (error) {
            console.error('Error fetching ETH price:', error);
        }
    };
    
    const handleDonateClick = (campaign) => {
        setSelectedCampaign(campaign);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCampaign(null);
        setDonateValue(0); // Reset donation value on modal close
    };
    
    const handleValueChange = (e) => {
        const value = e.target.value; // Get the input value
        setDonateValue(value); // Update the donation value
    };

    const donate = async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0];
        if (!walletAddress) {
            alert("Please connect your wallet first.");
            return;
        }

        const ethAmountInWei = web3.utils.toWei(ethAmount.toString(), 'ether'); // Convert ETH amount to Wei
        
        try {
            const transaction = await web3.eth.sendTransaction({
                from: walletAddress,
                to: selectedCampaign.campaignerAddress, // Use environment variable for recipient address
                value: ethAmountInWei,
                gas: 53000 // Set the gas limit here
            });

            console.log('Transaction successful:', transaction);
            alert(`Thank you for your donation of $${donateValue} to ${selectedCampaign.name}!`);
            {selectedCampaign.raised += parseInt(donateValue) }
            // Optionally, you could also save the donation to your backend here

            handleCloseModal(); // Close the modal after donation
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Donation failed! Check your wallet balance and try again.');
        }
    };

    const filteredCampaigns = campaignsData.filter((campaign) =>
        campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedCampaigns = limit ? filteredCampaigns.slice(0, limit) : filteredCampaigns;

    return (
        <section className="campaigns-section">
            {!limit && (
                <input
                    type="text"
                    placeholder="Search campaigns..."
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                />
            )}

            <div className="campaigns-container">
                {displayedCampaigns.map((campaign, index) => (
                    <div className="campaign-card" key={index}>
                        <h3>{campaign.name}</h3>
                        <p>{campaign.description}</p>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{
                                    width: `${(campaign.raised / campaign.goal) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <p>
                            Raised: ${campaign.raised} / ${campaign.goal}
                        </p>
                        <button className="donate-btn" onClick={() => handleDonateClick(campaign)}>Donate</button>
                    </div>
                ))}
            </div>

            {limit && (
                <Link to="/campaigns" className='Show-more'>View More 👉👉</Link>
            )}

            {/* Donation Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Donate to {selectedCampaign?.name}</h2>
                        <h3 style={{color:'black',fontFamily:"monospace"}}>Motive : {selectedCampaign?.description}</h3>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{
                                    width: `${(selectedCampaign.raised / selectedCampaign.goal) * 100}%`,
                                }}
                            ></div>
                            <br/>
                        </div>
                        <input
                            type='number'
                            onChange={handleValueChange}
                            value={donateValue}
                            placeholder="Enter donation amount"
                            onBlur={fetchEthAmount} // Fetch ETH amount when input loses focus
                        />
                        <br/>
                        <br/>
                        <button className='donateBTN' onClick={donate} style={{background:"#007bff" ,color:"white",cursor:"pointer", border:"none" , padding:"10px" ,fontSize:"18px",fontFamily:"monospace", borderRadius:"10px" }}> Donate</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Campaigns;
