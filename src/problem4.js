function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    answer += changeLetter(word[i].charCodeAt());
  }
  return answer;
}

function changeLetter(letter) {
  const largeA = 65;
  const largeZ = 90;
  const smallA = 97;
  const smallZ = 122;

  if (letter >= largeA && letter <= largeZ)
    return String.fromCharCode(letter - (letter - largeA) - (letter - largeZ));

  if (letter >= smallA && letter <= smallZ)
    return String.fromCharCode(letter - (letter - smallA) - (letter - smallZ));

  return String.fromCharCode(letter);
}

module.exports = problem4;
