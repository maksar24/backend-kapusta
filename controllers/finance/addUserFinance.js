const { removeZeroString, sumNormalize } = require("../../helpers");
const { UserIncome } = require("../../models");

const addUserIncome = async (req, res) => {
  const { id } = req.params;
  const { type, description, amount, category, subcategory, date } = req.body;

  const dateNormalize = {
    day: removeZeroString(date.day),
    month: removeZeroString(date.month),
    year: date.year,
  };

  const amountNormalize = sumNormalize(amount);

  const transaction = {
    type,
    description,
    amount: amountNormalize,
    category,
    subcategory,
    date: dateNormalize,
  };

  const newTransaction = await UserIncome.findOne({ id }).lean();
  if (transaction.type === "consumption") {
    newTransaction.consumption.push(transaction);
    await newTransaction.save();
  } else newTransaction.income.push(transaction);
  // console.log(newTransaction);

  res.json({
    status: "success",
    code: 200,
    newTransaction,
  });
};

module.exports = addUserIncome;
