const sendMessage = require("./sendMail");
const removeZeroString = require("./removeZeroString");
const calculateBalanceForAdd = require("./calculateBalanceForAdd");
const calculateBalanceForRemove = require("./calculateBalanceForRemove");

module.exports = {
  sendMessage,
  removeZeroString,
  calculateBalanceForAdd,
  calculateBalanceForRemove
};
