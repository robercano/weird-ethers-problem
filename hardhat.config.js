const { task, types } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");
require("hardhat-gas-reporter");

require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        version: "0.8.9",
    },
    paths: {
        artifacts: "./src/artifacts",
    },
    networks: {
        rinkeby: {
            accounts: {
                count: 10,
                mnemonic: process.env.DEPLOYER_MNEMONIC,
                path: "m/44'/60'/0'/0",
            },
            chainId: 4,
            gas: "auto",
            gasPrice: "auto",
            url: process.env.ALCHEMY_API_KEY_RINKEBY,
        },
        hardhat: {
            gasPrice: 180000000000,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
        },
    },
    gasReporter: {
        enabled: true,
    },
};
