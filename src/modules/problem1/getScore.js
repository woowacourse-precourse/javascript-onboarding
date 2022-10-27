const sumDigits = require("./sumDigits.js");
const multiplyDigits = require("./multiplyDigits.js");

function getScore(pages) {
  return Math.max(
    sumDigits(pages[0]),
    sumDigits(pages[1]),
    multiplyDigits(pages[0]),
    multiplyDigits(pages[1])
  );
}

module.exports = getScore;
