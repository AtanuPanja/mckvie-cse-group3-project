require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

//eth-sepolia.g.alchemy.com/v2/6dOdGNJ2yBhYxEhGMkLnHTnMSFXXEcpR
// 6dOdGNJ2yBhYxEhGMkLnHTnMSFXXEcpR
https: module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/6dOdGNJ2yBhYxEhGMkLnHTnMSFXXEcpR",
      accounts: [
        "879d35fecf90852949732c6b2ff8ace09447a0d53a0cc0db0e3f4754030463e2",
      ],
    },
  },
};
