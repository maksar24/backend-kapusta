const { Schema, model } = require("mongoose");
const Joi = require("Joi");

const categories = [
  "alcohol",
  "activities",
  "transport",
  "food",
  "utility_bills",
  "home_stuff",
  "gadgets",
  "education",
  "health",
  "salary",
  "others",
  "extra_income",
  "hobbies",
];

const transactionSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Enter a full name"],
    },
    balance: {
      type: Number,
      required: [true, "Set balance for user"],
    },
    income: [Object],
    consumption: [Object],
    type: {
      type: String,
      // required: [true, "Enter the type"],
      enum: ["income", "consumption"],
    },
    description: {
      type: String,
      // required: [true, "Enter a description of the transaction"],
    },
    amount: {
      type: Number,
      // required: [true, "Enter transaction amount"],
      min: 0,
    },
    category: {
      type: String,
      // required: [true, "Enter transaction category"],
      enum: categories,
    },
    subcategory: {
      type: String,
      // default: "others",
    },
    date: {
      day: {
        type: String,
        // required: [true, "Enter the date"],
        minLength: 1,
        maxLength: 2,
      },
      month: {
        type: String,
        // required: [true, "Enter the date"],
        minLength: 1,
        maxLength: 2,
      },
      year: {
        type: String,
        // required: [true, "Enter the date"],
        minLength: 4,
        maxLength: 4,
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "authUser",
      // required: true,
    },
    createdAt_ms: {
      type: String,
      default: () => Date.now(),
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const joiSchemaTransaction = Joi.object({
  type: Joi.string().required().valid("income", "consumption"),
  description: Joi.string().required(),
  amount: Joi.number().required(),
  category: Joi.string()
    .required()
    .valid(...categories),
  subcategory: Joi.string(),

  date: Joi.object({
    day: Joi.string().required().min(1).max(2),
    month: Joi.string().required().min(1).max(2),
    year: Joi.string().required().min(4).max(4),
  }),
});

const joiSchemaUser = Joi.object({
  name: Joi.string().required(),
  balance: Joi.number().required(),
});

const UserTransaction = model("user", transactionSchema);

module.exports = {
  UserTransaction,
  joiSchemaTransaction,
  joiSchemaUser,
};
