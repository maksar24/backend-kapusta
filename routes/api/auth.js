const express = require('express')

const { ctrlWrapper, validation } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers') 
const {joiSignUpSchema} = require('../../models/auth')

const router = express.Router()

router.post('/signup', validation(joiSignUpSchema, "try again"), ctrlWrapper(ctrl.register))

module.exports = router