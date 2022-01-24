const { removeZeroString, sumNormalize } = require("../../helpers");
const { UserTransaction } = require("../../models");

const addUserTransaction = async (req, res) => {
  const { _id } = req.user;

  const { type, description, amount, category, date } = req.body;

  const dateNormalize = {
    day: removeZeroString(date.day),
    month: removeZeroString(date.month),
    year: date.year,
  };

  const amountNormalize = sumNormalize(amount);
  const transaction = {
    type,
    category,
    description,
    amount: amountNormalize,
    date: dateNormalize,
  };

  const newTransaction = await UserTransaction.create({
    ...transaction,
    owner: _id,
  });

  res.json({
    status: "success",
    code: 200,
    data: newTransaction,
  });
};

module.exports = addUserTransaction;
