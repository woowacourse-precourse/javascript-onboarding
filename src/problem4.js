function problem4(word) {
  let answer = "";

  for (let x of word) {
    answer += reverseAlphabet(x.charCodeAt());
  }

  return answer;
}

function reverseAlphabet(alphabet) {
  if (alphabet >= 65 && alphabet <= 90)
    return String.fromCharCode(65 + 90 - alphabet);
  if (alphabet >= 97 && alphabet <= 122)
    return String.fromCharCode(97 + 122 - alphabet);
  return String.fromCharCode(alphabet);
}

module.exports = problem4;
