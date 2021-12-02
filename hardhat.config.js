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
