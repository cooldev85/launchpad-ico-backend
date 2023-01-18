require('dotenv').config()
const bcrypt = require('bcrypt');
const {adminKey} = require('../config/config')
const { EasyModal } = require('../models/EasyStarter')
const { OwnerModal } = require('../models/Owners')
const { AdminModal } = require('../models/Admins')
const saltRounds = 10;


getPoolsList = async () => {
	try {
		var rows = await EasyModal.find().sort({
			startTime: 1,
		})
		return { err: 0, result: rows }
	} catch (ex) {
		console.log(ex)
		return { err: 1, msg: "poolList: cannot found pool data" }
	}
}

getOwnerInfo = async (id) => {
	try {
		var rows = await OwnerModal.findOne({_id:id});
		return { err: 0, result: rows }
	} catch (ex) {
		console.log(ex)
		return { err: 1, msg: "poolList: cannot found pool data" }
	}
}
 
setPoolState = async(token, state, name, key) => {
	try {
		var admins = await AdminModal.find({ name: name, sessionKey : key })
		if(admins.length  == 0) return {error :1, result : false};
		await EasyModal.updateOne({tokenAddress : token}, {$set : {state:state}});
		return { error: 0, result: true}
	} catch (ex) {
		console.log(ex)
		return { err: 1, msg: "poolList: cannot found pool data" }
	}
}

getPoolInfo = async (tokenAddress) => {
	try {
		var row = await EasyModal.findOne({ tokenAddress: tokenAddress })
		return { err: 0, result: row }
	} catch (ex) {
		console.log(ex)
		return { err: 1, msg: "poolData: cannot found pool data" }
	}
}
createAdmin = async (key, id, password) => {
	try {
		if(key!==adminKey) return {error :2, result : false};
		var sessionKey = Math.floor(Math.random() * 1000000)
		var admins = await AdminModal.find({ name: id }) 
		if(admins.length > 0) return {error :3, result : false};
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password, salt);
		const instance = new AdminModal({name : id, password:hash, sessionKey : sessionKey})
		var res = await instance.save()
		return { error: 0, msg: 'success', result: res }
	} catch (ex) {
		return { error: 1, msg: ex }
	}
}
login = async(id, password) => {
	try{
		var row = await AdminModal.find({ name: id });
		if(row.length > 0){
			var pass = row[0].password;
			if(bcrypt.compareSync(password, pass)){
				return {error : 0, msg:'success', session: row[0].sessionKey}
			}
			else {
				return {error : 2, msg:"invalid password"}
			}
			
		}else{
			return { error: 1, msg: "Cannot found admin" }	
		}
	}catch(ex) {
		return { error: 2, msg: ex }
	}
}


module.exports = {getPoolsList, getOwnerInfo, setPoolState, getPoolInfo, createAdmin, login}