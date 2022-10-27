require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/LjpOPX6Y47TB4l_YOwRabi6ORAg98Rg0',
      accounts: ['19c7753ef948ceebedb3fd81e77cae2622affc5c4c43bb224caef2cd20e4a88f'],
    },
  },
};