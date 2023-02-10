const router = require('express').Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/temp/')
  },
  filename: (req, file, cb) => {
    var fs = require('fs');
    if (!fs.existsSync('./public'))fs.mkdirSync('./public');
    if (!fs.existsSync('./public/temp'))fs.mkdirSync('./public/temp');
    if (!fs.existsSync('./public/img'))fs.mkdirSync('./public/img');
    if (!fs.existsSync('./public/logo'))fs.mkdirSync('./public/logo');
    const filename = Math.floor(Math.random()*100000000)+".png";
    cb(null, filename)
  },
})

const upload = multer({ storage: storage })
const apiController = require('../controllers/apiController.js')
router.post('/get-pools-list', async (req, res) => {
  const response = await apiController.getPoolsList()
  return res.send(response)
})
router.post('/get-mypools', async (req, res) => {
  var account = req.body.account;
  const response = await apiController.getMyPools(account)
  return res.send(response)
})
router.post('/get-pool-info', async (req, res) => {
  var id = req.body.id;
  const response = await apiController.getPoolInfo(id)
  return res.send(response)
})
router.post('/create-pool', async (req, res) => {
    const response = await apiController.createPool(req.body)
    return res.send(response)
})
router.post('/create-simpletoken', async (req, res) => {
  const response = await apiController.createSimpleToken(req.body)
  return res.send(response)
})
router.post('/create-standardtoken', async (req, res) => {
  const response = await apiController.createStandardToken(req.body)
  return res.send(response)
})
router.post('/create-reflectiontoken', async(req, res) => {
  const response = await apiController.createReflectiontoken(req.body)
  return res.send(response)
})
router.post('/create-devidendtoken', async(req, res) =>{
  const response = await apiController.createReflectiontoken(req.body)
  return res.send(response)
})
router.post('/exists-pool', async (req, res) => {
  var address =req.body.token;
  const response = await apiController.existPool(address)
  return res.send(response)
})
router.post('/create-tokenlock', async(req, res) => {
  const response = await apiController.createTokenLock(req.body)
  return res.send(response)
})
router.post('/approve-token', async (req, res) => {
    const response = await apiController.ApproveToken(req.body)
    return res.send(response)
})
router.post('/upload-image', upload.single('file'),  async (req, res) => {
  if(!req.file){
    return res.send({id:'0.png'})
  }
  else {
    return res.send({id:req.file.filename})
  }
})
router.all('/*', async (req, res) => {
  return res.send({ error: 404, result: { msg: '404' } })
})
module.exports = router
