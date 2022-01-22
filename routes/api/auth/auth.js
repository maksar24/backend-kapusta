const express = require('express')

const { ctrlWrapper, validation } = require('../../../middlewares')
const { auth: ctrl } = require('../../../controllers') 
const {joiSignUpSchema} = require('../../../models')

const router = express.Router()

router.post('/signup', ctrlWrapper(ctrl.register))

module.exports = router