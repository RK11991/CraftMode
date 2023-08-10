const hre = require("hardhat");
const { ethers } = require('ethers');

async function main() {

  let temp_provider =  new ethers.JsonRpcProvider("https://sepolia.mode.network/");
  const fees = await temp_provider.getFeeData();
  console.log(fees);
  console.log(ethers.formatUnits(fees.gasPrice,"gwei"));

  let nonce  = await hre.ethers.provider.getTransactionCount("0x5fF6e13269f2730EB203860B4Af06A57E2574156")
  console.log("nonce: ",nonce);

  const contract = await hre.ethers.deployContract("SuperMeme", { });
  console.log(contract.target);  

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

