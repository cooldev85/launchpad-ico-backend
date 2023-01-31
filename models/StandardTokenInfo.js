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
  sellLiquidityFee: {type:Float64Array, default: ''},
  sellMarketingFee: {type:Float64Array, default: ''},
  buyLiquidityFee:{type:Float64Array, default: ''},
  buyMarketingFee:{type:Float64Array, default: ""},
  implementeAntiBot:{type:Number, default:''},
  
})

const OwnerModal = mongoose.model('Ownerdata', StandardToken)
module.exports = { OwnerModal }
