require('dotenv').config();
const { ethers } = require("ethers");
const ABI = require("./abi.json");

const RPCS = {
    // 1: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    4: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // 56:"https://bsc-dataseed.binance.org/",
    97:"https://data-seed-prebsc-1-s1.binance.org:8545/",
}

const networks = {
    // 1:"0x8ff42d3bC5827Ce6ff27D8b4071d6c8B05243B67",
    4:"0x8ff42d3bC5827Ce6ff27D8b4071d6c8B05243B67",
    // 56:"0x8ff42d3bC5827Ce6ff27D8b4071d6c8B05243B67",
    97:"0xB48fB677eC7aC9B87a418527f40d28873eb66740",
}
const provider = 
{
    // 1:new ethers.providers.JsonRpcProvider(RPCS[1]),
    4:new ethers.providers.JsonRpcProvider(RPCS[4]),
    // 56:new ethers.providers.JsonRpcProvider(RPCS[56]),
    97:new ethers.providers.JsonRpcProvider(RPCS[97])
}

const Launchpad = {
    // 1: new ethers.Contract(networks[1], ABI.Launchpad_ABI, provider[1]),
    4: new ethers.Contract(networks[4], ABI.Launchpad_ABI, provider[4]),
    // 56: new ethers.Contract(networks[56], ABI.Launchpad_ABI, provider[56]),
    97: new ethers.Contract(networks[97], ABI.Launchpad_ABI, provider[97])
};

module.exports = { provider, Launchpad};
