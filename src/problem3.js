const { countDigits369FromZeroUntil } = require("./problem3.lib");

function problem3(number) {
  return countDigits369FromZeroUntil(number + 1);
}

module.exports = problem3;
