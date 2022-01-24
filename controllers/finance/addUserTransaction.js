const { removeZeroString, sumNormalize } = require("../../helpers");
const { UserTransaction } = require("../../models");

const addUserTransaction = async (req, res) => {
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

  const newTransaction = await UserTransaction.findById(id).lean();
  if (transaction.type === "consumption") {
    newTransaction.consumption.push(transaction);
  } else newTransaction.income.push(transaction);

  res.json({
    status: "success",
    code: 200,
    newTransaction,
  });
};

module.exports = addUserTransaction;
