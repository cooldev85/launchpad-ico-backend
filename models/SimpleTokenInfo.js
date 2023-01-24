const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SimpleToken = new Schema({
 tokenType : { type: Number, default: '' },
  tokenName: { type: String, default: '' },
  tokenSymbol: { type:String, default: ''},
  tokenDecimals: {type:String, default: ''},
  totalSupply: {type:String, default: ''},
})

const OwnerModal = mongoose.model('Ownerdata', SimpleToken)
module.exports = { OwnerModal }
