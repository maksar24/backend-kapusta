const { Schema, model } = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcryptjs')
import { isEmail } from 'validator'

const authSchema = Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
      min: 3,
      max: 10,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email is required'],
        unique: true,
        validate: [ isEmail, 'invalid email' ],
    },
    token: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
        required: [true, 'AvatarURL is required'],
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },
}, {
    versionKey: false, timestamps: true
})

userSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

const joiSignUpSchema = Joi.object({
    name: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email().required()
})

const joiLogInSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required()
})

const joiVerifySchema = Joi.object({
  email: Joi.string().email().required()
})

const Auth = model('auth', authSchema)

module.exports = {
  Auth,
  joiSignUpSchema,
  joiLogInSchema,
  joiVerifySchema
}