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

function problem4(word) {
  var answer = "";
  return answer;
}

module.exports = problem4;
