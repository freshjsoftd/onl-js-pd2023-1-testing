module.exports.multiply = (a, b) => a * b;

module.exports.asyncSumm = (c, d, callback) => {
  setTimeout(() => {
    callback(c + d);
  }, 1000)
}