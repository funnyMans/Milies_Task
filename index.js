const WINNING_SUM = 123.4;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
  const priceInts = cartItemsPrices.map((price) => parseInt(price * 100));
  const sum = priceInts.reduce((prev, next) => prev + next) / 100;
  return sum === WINNING_SUM;
}

module.exports = doesCartWinPrize;
