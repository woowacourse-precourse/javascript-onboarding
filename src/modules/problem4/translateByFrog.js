const changeToFrogAlphabet = require("./changeToFrogAlphabet.js");

function translateByFrog(character) {
  if ("a" <= character && character <= "z") return changeToFrogAlphabet(character, 0);
  else if ("A" <= character && character <= "Z") return changeToFrogAlphabet(character, 1);
  return character;
}

module.exports = translateByFrog;
