import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  // State for editing and wallet connection
  const [isEditing, setIsEditing] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(true); // Initially connected
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    walletAddress: '0x123456789abcdef',
    role: 'Student',
    donations: [
      { campaign: 'Education for All', amount: '2 ETH', date: '2023-07-12' },
      { campaign: 'Help Sarah Graduate', amount: '1.5 ETH', date: '2023-06-05' },
    ],
    campaigns: [
      { title: 'Fund My Final Year', date: '2023-09-01' },
      { title: 'Support for Tuition', date: '2023-05-23' },
    ],
  });

  // Handles profile edit
  const handleEditProfile = () => {
    if (isEditing) {
      // Save profile changes
      // You can add logic to save the changes to a database or blockchain here
      console.log('Profile saved:', userData);
    }
    setIsEditing(!isEditing);
  };

  // Handles disconnecting wallet
  const handleDisconnectWallet = () => {
    setIsWalletConnected(false);
    // Add logic to disconnect the wallet, e.g., remove wallet details from state
    console.log('Wallet disconnected');
  };

  // Handles input change for editing profile
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>{isEditing ? 'Edit Profile' : 'Profile Page'}</h2>
        <button className="edit-btn" onClick={handleEditProfile}>
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-details">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> 
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          ) : (
            userData.name
          )}
        </p>
        <p><strong>Email:</strong> 
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          ) : (
            userData.email
          )}
        </p>
        <p><strong>Wallet Address:</strong> {userData.walletAddress}</p>
        <p><strong>Role:</strong> {userData.role}</p>
      </div>

      {userData.role === 'Donor' && (
        <div className="donation-history">
          <h3>Donation History</h3>
          {userData.donations.map((donation, index) => (
            <div key={index} className="donation-item">
              <p><strong>Campaign:</strong> {donation.campaign}</p>
              <p><strong>Amount:</strong> {donation.amount}</p>
              <p><strong>Date:</strong> {donation.date}</p>
            </div>
          ))}
        </div>
      )}

      {userData.role === 'Student' && (
        <div className="campaigns-supported">
          <h3>Campaigns Supported</h3>
          {userData.campaigns.map((campaign, index) => (
            <div key={index} className="campaign-item">
              <p><strong>Title:</strong> {campaign.title}</p>
              <p><strong>Date:</strong> {campaign.date}</p>
            </div>
          ))}
        </div>
      )}

      <div className="account-settings">
        <h3>Account Settings</h3>
        {isWalletConnected ? (
          <button className="disconnect-btn" onClick={handleDisconnectWallet}>
            Disconnect Wallet
          </button>
        ) : (
          <p>Wallet disconnected</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
