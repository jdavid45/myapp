const express = require('express')
const router=express.Router()
const myappController = require("./myapp.controller");


router.get('/list',myappController.list)
      .post('/add',myappController.add)
      .delete('/del',myappController.del)
      .update('/comp',myappController.comp)

module.exports = router