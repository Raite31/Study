const express = require('express')
const router = express.Router()

// 主页路由
router.get('/',(req,res)=>{
    res.send('维基主页')
})

// "关于主页"路由
router.get('/about',(req,res)=>{
    res.send('关于此维基')
})

module.exports = router