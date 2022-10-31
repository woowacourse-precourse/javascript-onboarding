const DUPLICATE_CHARACTER_REGEX = /(\w)\1{1,}/g;

function removeDuplicates(str) {
  while (hasDuplicateCharacter(str)) {
    str = str.replace(DUPLICATE_CHARACTER_REGEX, '');
  }

  return str;
}

function hasDuplicateCharacter(str) {
  return DUPLICATE_CHARACTER_REGEX.test(str);
}

function problem2(cryptogram) {
  const answer = removeDuplicates(cryptogram);

  return answer;
}

module.exports = problem2;
