const A_CHAR_CODE = "A".charCodeAt();
const Z_CHAR_CODE = "Z".charCodeAt();

const reverseAlphabet = (alphabet) => {
  const gap = Z_CHAR_CODE - alphabet.toUpperCase().charCodeAt();
  const result = String.fromCharCode(A_CHAR_CODE + gap);
  return isLowerCase(alphabet) ? result.toLowerCase() : result;
};

const isLowerCase = (alphabet) => !!alphabet.match(/[a-z]/);
const isAlphabet = (alphabet) => !!alphabet.match(/[a-zA-Z]/);

function problem4(word) {
  var answer;
  answer = word.split("").map((item) => {
    return isAlphabet(item) ? reverseAlphabet(item) : item;
  });
  return answer.join("");
}

module.exports = problem4;
