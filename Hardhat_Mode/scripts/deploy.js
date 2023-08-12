const hre = require("hardhat");
const { ethers } = require('ethers');

async function main() {

  let temp_provider =  new ethers.JsonRpcProvider("https://sepolia.mode.network/");
  const fees = await temp_provider.getFeeData();
  console.log(fees);
  console.log(ethers.formatUnits(fees.gasPrice,"gwei"));

 // let nonce  = await hre.ethers.provider.getTransactionCount("")
 // console.log("nonce: ",nonce);

  const contract = await hre.ethers.deployContract("SuperMeme", { 
    gasPrice: ethers.parseUnits('2', 'gwei'),
  });
  console.log(contract.target);  

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
