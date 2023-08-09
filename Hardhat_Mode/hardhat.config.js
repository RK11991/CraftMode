require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",

  networks: {
    'ModeSepolia': {
      url: 'https://sepolia.mode.network/',
      accounts: [PRIVATE_KEY],
    },
    
  },

  etherscan: {
    apiKey: {
      "ModeSepolia": "abc",
    },

    customChains: [
      {
        network: "ModeSepolia",
        chainId: 919,
        urls: {
          apiURL: "https://sepolia.explorer.mode.network/api",
          browserURL: '',
        },
      },
    ],

  },
}
