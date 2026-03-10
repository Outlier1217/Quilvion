require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",

  networks: {
    skale_base: {
      url: "https://skale-base.skalenodes.com/v1/base",
      accounts: [PRIVATE_KEY],
      chainId: 1187947933
    }
  }
};