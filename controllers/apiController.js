require('dotenv').config()

const { EasyModal } = require('../models/EasyStarter')
const { OwnerModal } = require('../models/Owners')
const config = require('../config/config')
const fs = require('fs');

getPoolsList = async () => {
	try {
		var rows = await EasyModal.find({ state: 10 }).sort({
			startTime: 1,
		})
		return { err: 0, result: rows }
	} catch (ex) {
		console.log(ex)
		return { err: 1, msg: "poolList: cannot found pool data" }
	}
}

getMyPools = async (ownerAddress) => {
	try {
		var row = await EasyModal.find({ ownerAddress: ownerAddress }).sort({
			startTime: 1
		})
		return { err: 0, result: row }
	} catch (ex) {
		console.log(ex)
		return { err: 1, msg: "poolData: cannot found pool data" }
	}
}

getPoolInfo = async (id) => {
	try {
		var row = await EasyModal.findOne({ _id: id })
		return { err: 0, result: row }
	} catch (ex) {
		console.log(ex)
		return { err: 1, msg: "poolData: cannot found pool data" }
	}
}

createToken = async (props) => {
	try {
		const instance = new OwnerModal(props)
		var res = await instance.save()
		return { err: 0, msg: 'success', result: res }
	} catch (ex) {
		return { err: 1, msg: ex }
	}
}
ApproveToken = async (address) => {
	try{
		const approve = await EasyModal.find({tokenAddress: address})
		if(row.length > 0) return { error:1, result: true}
		else return {error:0, msg: ex}
	}catch (ex) {
		return {err: 2, msg:ex}
	}
}
setKYCVerified = async (id) => {
	try {
		var res = OwnerModal.updateOne({ _id: id }, { $set: { hasKYC: true } });
		return { err: 0, result: true }
	} catch (ex) {
		return { err: 1, msg: ex }
	}
}

existPool = async (address) => {
	try {
		var rows = await EasyModal.find({ tokenAddress: address })
		if (rows.length > 0) return { error: 1, msg: 'already exists' }
		else return { error: 0, msg: 'already exists' }
	} catch (ex) {
		return { err: 2, msg: ex }
	}
}

createPool = async (props) => {
	try {
		var rows = await EasyModal.find({ tokenAddress: props?.tokenAddress, state: 10 })
		if (rows.length > 0) return { error: 2, msg: 'already exists' }
		const instance = new EasyModal(props)
		var res = await instance.save()
		const path = require('path')
		var logopath1 = path.resolve(__dirname, "../public/temp/" + props?.token?.icon);
		var imagepath1 = path.resolve(__dirname, "../public/temp/" + props?.token?.image);
		var logopath2 = path.resolve(__dirname, "../public/logo/" + props?.token?.icon);
		var imagepath2 = path.resolve(__dirname, "../public/img/" + props?.token?.image);
		await fs.renameSync(logopath1, logopath2);
		await fs.renameSync(imagepath1, imagepath2);
		return { error: 0, msg: 'success', result: res }
	} catch (ex) {
		return { error: 1, msg: ex }
	}
}

uploadImage = async (req, res) => {
	try {
		if (!req.file) {
			return { err: 1 }
		}
		return { status: "success", id: filename };
	} catch (ex) {
		return { err: 1, msg: ex }
	}
}

module.exports = {
	getPoolsList,
	getPoolInfo,
	getMyPools,
	createToken,
	createPool,
	existPool,
	setKYCVerified,
	uploadImage
}
