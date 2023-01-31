const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenLockInfo = new Schema({
 tokenAddress : { type: String, default: '' },
  tokenAmount: { type: Number, default: '' },
  lockDate:{ type:Date, default: ''}
})

const OwnerModal = mongoose.model('Ownerdata', TokenLockInfo)
module.exports = { OwnerModal }