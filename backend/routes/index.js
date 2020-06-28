const express = require('express')
const User = require('../models/index')
const router = express.Router()



router.get('/',(req,res)=>{
User.find({},(err,data)=>{
    res.json(data)
})
})

module.exports = router