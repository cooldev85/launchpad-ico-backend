const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DevidendToken = new Schema({
 tokenType : { type: Number, default: '' },
  tokenName: { type: String, default: '' },
  tokenSymbol: { type:String, default: ''},
  tokenDecimals: {type:String, default: ''},
  totalSupply: {type:String, default: ''},
  maxWallet: {type:String, default: ''},
  maxTransactionAmount: {type:Number, default: ''},
  Router:{type:String, default: ''},
  BaseToken: {type:String, default: ''},
  marketingWallet: {type:String, default: ''},
  sellLiquidityFee: {type:Number, default: ''},
  sellMarketingFee: {type: Number, default: ''},
  buyLiquidityFee:{type:Number, default: ''},
  BuyMarketingFee:{type: Number, default: ''},
  insteadMarketingFee:{type:Number, default: ''},
  reflectionTokenAddress:{type:String, default:''},
  minimumTokenBalance:{type:Number, default: ''},
  sellRewardFee: {type:Number, default: ''},
  buyRewardFee: {type:Number, default: ''},
  implementAntiBot: {type:Number, default:''},
})

const DevidendTokenModal = mongoose.model('DevidendTokenData', DevidendToken)
module.exports = { DevidendTokenModal }
