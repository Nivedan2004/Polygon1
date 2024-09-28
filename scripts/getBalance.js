const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/HoneyBee.sol/HoneyBee.json");

const tokenAddress = "0xb816Bcd3e0911F5870EE92f2f000eA3C4e3D6C54"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x3D39A3794A02a10a2722cFC6D923E9602a3d6cF4";

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();