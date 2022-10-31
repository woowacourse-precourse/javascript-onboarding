const A_ASCII = 65,
  a_ASCII = 97;
const Z_ASCII = 90,
  z_ASCII = 122;

function getLowerCaseConvert(code) {
  const newCode = z_ASCII - Math.abs(code - a_ASCII);

  return String.fromCharCode(newCode);
}

function getUpperCaseConvert(code) {
  const newCode = Z_ASCII - Math.abs(code - A_ASCII);

  return String.fromCharCode(newCode);
}

function getConvert(ch) {
  const ch_code = ch.charCodeAt();
  let result = '';

  //소문자;
  if (ch_code >= a_ASCII) {
    result = getLowerCaseConvert(ch_code);
  } else {
    result = getUpperCaseConvert(ch_code);
  }

  return result;
}

function problem4(word) {
  const regex = /^[a-z|A-Z]$/;
  let answer = '';

  for (ch of word) {
    if (regex.test(ch)) {
      answer += getConvert(ch);
    } else {
      answer += ch;
    }
  }

  return answer;
}

console.log(problem4('I love you'));

module.exports = problem4;
