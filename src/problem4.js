function problem4(word) {
  var answer = '';
  for (let letter of word) {
    answer += convertLetter(letter);
  }

  return answer;
}

function convertLetter(letter) {
  const [UPPER, LOWER] = [
    'A'.charCodeAt(0) + 'Z'.charCodeAt(0),
    'a'.charCodeAt(0) + 'z'.charCodeAt(0),
  ];

  if (letter === ' ') {
    return ' ';
  }

  if (isUpper(letter)) {
    return String.fromCharCode(UPPER - letter.charCodeAt(0));
  }

  if (isLower(letter)) {
    return String.fromCharCode(LOWER - letter.charCodeAt(0));
  }
}

function isUpper(string) {
  return string.match(new RegExp(/^[A-Z]/)) !== null;
}

function isLower(string) {
  return string.match(new RegExp(/^[a-z]/)) !== null;
}

module.exports = problem4;
