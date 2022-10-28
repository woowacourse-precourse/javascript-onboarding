const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

function problem4(word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    result += convert(letter);
  }
  console.log(result);
  return result;
}
function convert(letter) {
  if (letter === " ") {
    return letter;
  }
  const isLetterUpper = checkUpper(letter);
  if (isLetterUpper) {
    const idx = UPPERCASE.split("").indexOf(letter);
    return UPPERCASE[25 - idx];
  }
  const idx = LOWERCASE.split("").indexOf(letter);
  return LOWERCASE[25 - idx];
}

function checkUpper(letter) {
  if (letter === letter.toUpperCase()) {
    return true;
  }
  return false;
}

function testCode() {
  problem4("I love you");
}
testCode();
module.exports = problem4;
