const translateByFrog = require("./modules/problem4/translateByFrog.js");

function problem4(word) {
  let newWord = "";
  for (const character of word) {
    newWord += translateByFrog(character);
  }
  return newWord;
}

module.exports = problem4;
