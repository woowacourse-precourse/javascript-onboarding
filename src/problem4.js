function problem4(word) {
  var answer = '';
  return answer;
}

function convertLetterByDictionary(letter, dictionary) {
  if (letter === ' ') {
    return ' ';
  }

  if (isLower(letter)) {
    return dictionary[letter.toUpperCase()].toLowerCase();
  }

  if (isUpper(letter)) {
    return dictionary[letter];
  }
}

function isUpper(string) {
  return string.match(new RegExp(/^[A-Z]/)) !== null;
}

function isLower(string) {
  return string.match(new RegExp(/^[a-z]/)) !== null;
}

console.log(problem4('I love you'));

module.exports = problem4;
