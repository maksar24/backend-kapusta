const { Schema, model } = require("mongoose");
const Joi = require("Joi");

const userSchema = Schema(
  {
    name: {
      type: String,
    },
    balance: {
      type: Number,
      required: [true, "Set balance for user"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const joiSchema = Joi.object({
  name: Joi.string(),
  balance: Joi.number().required(),
});

const User = model("proudct", userSchema);

module.exports = {
  User,
  joiSchema,
};
