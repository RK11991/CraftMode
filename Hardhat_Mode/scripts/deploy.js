const hre = require("hardhat");
const ethers = require("ethers");

async function main() {

  const contract = await hre.ethers.deployContract("SuperMeme", { gasLimit: "10000000" });
  console.log(contract.target);  

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

