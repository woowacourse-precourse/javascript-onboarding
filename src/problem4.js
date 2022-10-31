const LOWER = 219;
const UPPER = 155;

function checkIsLower(alpa) {
  if (alpa > 64 && alpa < 91) {
    return 1;
  } else if (alpa > 96 && alpa < 123) {
    return 2;
  } else {
    return 0;
  }
}

function changeAlpa(alpa) {
  let asciiNum = alpa.charCodeAt(0);
  let flag = checkIsLower(asciiNum);
  if (flag === 2) {
    return String.fromCharCode(LOWER - asciiNum);
  } else if (flag === 1) {
    return String.fromCharCode(UPPER - asciiNum);
  } else {
    return String.fromCharCode(asciiNum);
  }
}

function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    answer += changeAlpa(word[i]);
  }
  return answer;
}

module.exports = problem4;
