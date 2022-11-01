function isAlphabet(character) {
  const regex = /^[a-z|A-Z]{1}/;

  if (character.length > 1) return false;

  return regex.test(character);
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
