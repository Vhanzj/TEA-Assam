// Replace with your contract address and ABI
const contractAddress = "0x094eeF5e881C49e954583A2eeC03d4Da34128E53";
const abi = [
    // Replace with the actual ABI of your contract
    {
        "inputs": [],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let provider;
let signer;
let contract;

// Connect to the user's wallet
async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, abi, signer);
        document.getElementById('mintButton').disabled = false;
        document.getElementById('status').innerText = "Wallet connected!";
    } else {
        document.getElementById('status').innerText = "Please install MetaMask!";
    }
}

// Mint the NFT
async function mintNFT() {
    try {
        document.getElementById('mintButton').disabled = true;
        document.getElementById('status').innerText = "Minting...";
        const tx = await http://contract.mint();
        await tx.wait();
        document.getElementById('status').innerText = "NFT Minted Successfully!";
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = "Minting Failed!";
        document.getElementById('mintButton').disabled = false;
    }
}

// Automatically connect wallet when the page loads
window.onload = connectWallet;
