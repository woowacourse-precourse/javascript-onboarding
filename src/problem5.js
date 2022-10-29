const getPapersUsed = require("./modules/problem5/getPapersUsed.js");

function problem5(money) {
  const papers = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return getPapersUsed(money, papers, 0);
}

module.exports = problem5;
