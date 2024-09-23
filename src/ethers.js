import { ethers } from 'ethers';

// Connect to MetaMask
async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return signer;
    } catch (err) {
      console.error("User denied account access", err);
    }
  } else {
    alert('MetaMask is not installed');
  }
}
