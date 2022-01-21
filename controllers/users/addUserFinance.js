const { User } = require("../../models");

const addUserFinance = async (req, res) => {
  const result = await User.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addUserFinance;
