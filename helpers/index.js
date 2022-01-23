const sendMessage = require('./sendMail')
const sumNormalize = require("./sumNormalize");
const removeZeroString = require("./removeZeroString");

module.exports = {
  sumNormalize,
  removeZeroString,
  sendMessage
};
