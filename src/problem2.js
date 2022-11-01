const eraseConsecutiveChars = require("./modules/problem2/eraseConsecutiveChars.js");

function problem2(cryptogram) {
  let str = cryptogram;
  let encrypted = eraseConsecutiveChars(str);
  while (str !== encrypted) {
    str = encrypted;
    encrypted = eraseConsecutiveChars(str);
  }
  return encrypted;
}

module.exports = problem2;
