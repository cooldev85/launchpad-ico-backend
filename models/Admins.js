const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin_Schema = new Schema({
    name: { type: String, default: '' },
    password: { type: String, default: '' },
    sessionKey: { type: String, default: '' }
})

const AdminModal = mongoose.model('Admindata', Admin_Schema)
module.exports = { AdminModal }
