const { Schema, model } = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

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
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
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
  }
}, {
  versionKey: false, timestamps: true
});

authSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};

authSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
};

const joiSignUpSchema = Joi.object({
  name: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required()
});

const joiLogInSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required()
});

const Auth = model('auth', authSchema);

module.exports = {
  Auth,
  joiSignUpSchema,
  joiLogInSchema
};