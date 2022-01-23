const sumNormalize = (sum) => {
  sum *= 100;
  sum = Math.floor(sum) / 100;
  return sum;
};

module.exports = sumNormalize;
