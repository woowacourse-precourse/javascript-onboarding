const { totalCountClap, checkInputError } = require("./problem3.util");

function problem3(number) {
  if (checkInputError(number)) return "error";
  return totalCountClap(number);
}

module.exports = problem3;
