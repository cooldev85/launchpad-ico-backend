const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EasySchema = new Schema({
  chainId: { type: Number, default: 1 },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  tokenAddress: { type: String, default: '' },
  rewardWallet: { type: String, default: '' },
  ownerAddress: { type: String, default: '' },
  ownerInfo: { type: String, default: '' },
  price: {type: Number, default:0},
  tier: {type: Number, default:0},
  totalToken: {type: Number, default:0},
  totalSold: {type: Number, default:0},
  minPurchase: {type: Number, default:0},
  maxPurchase: {type: Number, default:0},
  startTime: {type: Number, default:0},
  endTime: {type: Number, default:0},
  closeTime: {type: Number, default:0},
  token: {  
    icon: { type: String, default: '' },
    image: { type: String, default: '' },
    symbol: { type: String, default: '' },
    decimals: { type: Number, default: 18 }
  },
  whitelist: {
    open: {type: Number, default:0},
    end: {type: Number, default:0},
    accounts: { type: Object, default: {}}
  },
  vesting: {
    text: { type: String, default: '' },
  },
  socials: {
    twitter: { type: String, default: '' },
    telegram: { type: String, default: '' },
    discord: { type: String, default: '' },
    site: { type: String, default: '' },
  },
  kyc: {
    hasKyc: { type: Boolean, default: false },
    url: { type: String, default: '' },
  },
  swap: {
    currencyTokenAddress: { type: String, default: '' },
    totalRaise: { type: Number, default: 0 },
    symbol: { type: String, default: '' },
    decimals: { type: Number, default: 18 }
  },
  dates: {
    registion: {type: Number, default:0}
  },
  withdrawTime: {type: Number, default:0},
  state: { type: Number, default: '' },
})

const EasyModal = mongoose.model('Easydata', EasySchema)
module.exports = { EasyModal }
