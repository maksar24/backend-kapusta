const { UserTransaction } = require("../../models");

const addUserFinance = async (req, res) => {
  const result = await UserTransaction.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addUserFinance;
