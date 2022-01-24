const {
  Auth: { User },
} = require("../models");

const updateBalance = async (id, amount, type) => {
  console.log(id, amount, type);
  const user = await User.findOne({ id });
  let balance = user.balance;
  if (type === "income") {
    balance += amount;
  }
  if (type === "consumption") {
    balance -= amount;
  }
  const updatedUser = await User.findOneAndUpdate({ id }, { balance }, { new: true });
  return updatedUser.balance;
};

module.exports = updateBalance;
