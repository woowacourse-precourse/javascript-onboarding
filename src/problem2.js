const {
  infinityDeleteDuplicateWord,
  checkInputError,
} = require("./problem2.util");

function problem2(cryptogram) {
  if (checkInputError(cryptogram)) return "error";
  return infinityDeleteDuplicateWord(cryptogram);
}

module.exports = problem2;
