const convert = (letter) => {
  const code = letter.charCodeAt();
  const UpperRegex = /[A-Z]/g;
  const LowerRegex = /[a-z]/g;

  if (UpperRegex.test(letter)) {
    return String.fromCharCode(65 + 90 - code);
  }

  if (LowerRegex.test(letter)) {
    return String.fromCharCode(97 + 122 - code);
  }

  return letter;
};

function problem4(word) {
  var answer = "";

  for (let i = 0; i < word.length; i++) {
    answer += convert(word[i]);
  }

  return answer;
}

module.exports = problem4;
