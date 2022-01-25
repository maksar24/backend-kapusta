const { NotFound } = require('http-errors')
const { UserTransaction } = require("../../models");

const getReportTransactions = async (req, res) => {
  const { type, year, month } = req.params;
  const { _id } = req.user;
  const result = await UserTransaction.find({
    owner: _id,
    type,
    year,
    month
  });
  
  if (result.length === 0) {
    throw new NotFound(`No one ${type} transaction for ${month} ${year}`)
  }
  
//   const total = result
//       .map((item) => item.amount)
//       .reduce((a, b) => a + b)
  
  res.json({
    status: "success",
      code: 200,
    result
  });
};

module.exports = getReportTransactions;