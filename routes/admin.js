const router = require('express').Router();
const adminController = require('../controllers/adminController.js');
router.post("/get-pools-list", async (req, res) => {
    const response = await adminController.getPoolsList();
    return res.send(response);
})
router.post("/get-owner-info", async (req, res) => {
    var tokenAddress = req.body.tokenAddress;
    const response = await adminController.getOwnerInfo(tokenAddress);
    return res.send(response);
})
router.post("/get-pool-info", async (req, res) => {
    var tokenAddress = req.body.tokenAddress;
    const response = await adminController.getPoolInfo(tokenAddress);
    return res.send(response);
})
router.post("/set-pool-state", async (req, res) => {
    var token = req.body.tokenAddress;
    var type =req.body.type;
    var adminid = req.body.key;
    var adminname = req.body.name;
    const response = await adminController.setPoolState(token, type, adminname, adminid);
    return res.send(response);
})
router.post("/create-admin", async (req, res) => {
    var key = req.body.key;
    var id = req.body.id;
    var password =req.body.password;
    const response = await adminController.createAdmin(key, id, password);
    return res.send(response);
})
router.post("/login", async (req, res) => {
    var id = req.body.id;
    var password = req.body.password;
    const response = await adminController.login(id, password);
    return res.send(response);
})
router.all('/*', async (req, res) => {
    return res.send({ error: 404, result: { msg: '404' } })
})
module.exports = router