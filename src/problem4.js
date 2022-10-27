const { checkInputError, transAlpha, checkAlpha } = require("./problem4.util");

function problem4(word) {
  if (checkInputError(word)) return "error";
  let words = "";
  for (const str of word) {
    let temp = checkAlpha(str) ? transAlpha(str) : " ";
    words += temp;
  }
  return words;
}

module.exports = problem4;
