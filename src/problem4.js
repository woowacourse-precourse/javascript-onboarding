const A_CHAR_CODE = "A".charCodeAt();
const Z_CHAR_CODE = "Z".charCodeAt();

const convert = (alpha) => {
  const oldAlpha = alpha;
  const newAlpha = reverseAlphabet(alpha);

  return isLowerCase(oldAlpha) ? newAlpha.toLowerCase() : newAlpha;
};

const reverseAlphabet = (alpha) => {
  const result = String.fromCharCode(
    A_CHAR_CODE + (Z_CHAR_CODE - alpha.toUpperCase().charCodeAt())
  );
  return result;
};

const isLowerCase = (alpha) => {
  return alpha.match(/[a-z]/) ? true : false;
};

const isAlphabet = (alpha) => {
  return alpha.match(/[a-zA-Z]/) ? true : false;
};

function problem4(word) {
  var answer;
  answer = word.split("").map((item) => {
    return isAlphabet(item) ? convert(item) : item;
  });
  return answer.join("");
}

module.exports = problem4;
