const { NotFound } = require("http-errors");
const { auth } = require("../../models");
const { User } = auth;
const { sumNormalize } = require("../../helpers");

const getBalance = async (req, res) => {
  const { _id } = req.user;

  const user = await User.find({ _id: _id });
  if (!user) {
    throw new NotFound(`User with ${_id} not found`);
  }

  const normalizedBalance = sumNormalize(balance);

  res.json({
    status: "success",
    code: 200,
    data: {
      balance: normalizedBalance,
    },
  });
};

module.exports = getBalance;
