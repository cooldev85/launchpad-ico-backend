
const { EasyModal } = require('../models/EasyStarter')

getPoolsList = async () => {
	try {
		var rows = await EasyModal.find({state:10}).sort({
			startTime: 1,
		})
		return rows;
	} catch (ex) {
		console.log(ex) 
		return { err: 1, msg: "poolList: cannot found pool data" }
	}
}

updatePool = async (tokenAddress, closeTime, withdrawTime, totalSold) => {
	try {
		await EasyModal.updateOne({tokenAddress : tokenAddress}, {$set : {closeTime : closeTime, totalSold : totalSold, withdrawTime: withdrawTime}});
	} catch (ex) {
		console.log(ex) 
		return { err: 1, msg: "poolList: cannot found pool data" }
	}
}

module.exports = {
	getPoolsList,
	updatePool
}
