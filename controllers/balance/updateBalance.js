const { NotFound } = require("http-errors");
const { Auth } = require("../../models");

const updateBalance = async (req, res) => {
  const { _id } = req.user;
  const { balance } = req.body;
  
  const user = await Auth.findByIdAndUpdate(_id, { balance }, { new: true });
  if (!user) {
    throw new NotFound(`User with ${_id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: { balance: user.balance },
  });
};

module.exports = updateBalance;
