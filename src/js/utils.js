const setPercentage = (originalPrice, currentPrice) => {
  const difference = originalPrice - currentPrice;
  const discount = difference * 100 / originalPrice;
  return parseInt(discount);
}

module.exports = {
  setPercentage
};
