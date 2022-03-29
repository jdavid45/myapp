const express = require('express')
const router=express.Router()
const myappController = require("./myapp.controller");


router.get('/list',myappController.list)
      .post('/add',myappController.add)
      .

module.exports = router