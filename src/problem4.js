const A_CHAR_CODE = "A".charCodeAt();
const Z_CHAR_CODE = "Z".charCodeAt();

const reverseAlphabet = (alphabet) => {
  const result = String.fromCharCode(
    A_CHAR_CODE + (Z_CHAR_CODE - alphabet.toUpperCase().charCodeAt())
  );
  return result;
};

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
