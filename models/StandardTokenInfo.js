const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StandardToken = new Schema({
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
  sellMarketingFee: {type:Number, default: ''},
  buyLiquidityFee:{type:Number, default: ''},
  buyMarketingFee:{type:Number, default: ""},
  implementeAntiBot:{type:Number, default:''},
  
})

const StandardTokenModal = mongoose.model('StandardTokenData', StandardToken)
module.exports = { StandardTokenModal }
