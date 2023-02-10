const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Owner_Schema = new Schema({
  firstname: { type: String, default: '' },
  lastname: { type: String, default: '' },
  fullname: { type: String, default: '' },
  email: { type: String, default: '' },
  country: { type: String, default: '' },
  street: { type: String, default: '' },
  idnumber: { type: String, default: '' },
  phone: { type: String, default: '' },
  hasKYC: { type: Boolean, default: false}
})

const OwnerModal = mongoose.model('Ownerdata', Owner_Schema)
module.exports = { OwnerModal }
