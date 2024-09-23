import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import './Navbar.css';
import Web3 from 'web3';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentAcc, setCurrentAcc] = useState("");

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const web3 = new Web3(window.ethereum);
      const Accounts = await web3.eth.getAccounts();
      setCurrentAcc(Accounts[0]);
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      setProvider(provider);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setProvider(null);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };
// if(!walletAddress){connectWallet()};
  return (
    <nav className="custom-navbar">
      <ul className="nav-items">
        <li>  <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/campaigns" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Campaigns
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
            About
          </NavLink>
          </li>
        <li>
          {walletAddress ? (
            <div className="wallet-container">
              <button 
                className="wallet-button connected" 
                onClick={toggleDropdown}
              >
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </button>
              {dropdownVisible && (
                <button className="disconnect-button" onClick={disconnectWallet}>
                  Disconnect
                </button>
              )}
            </div>
          ) : (
            <button onClick={connectWallet} className="wallet-button">Connect Wallet</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
