function isUpperCase(code) {
  return code >= 65 && code <= 90;
}

function isLowerrCase(code) {
  return code >= 97 && code <= 122;
}

function convertGreenFrog(code) {
  const SUM_UPPER_A_TO_Z = 155;
  const SUM_LOWER_A_TO_Z = 219;
  if (isUpperCase(code)) return SUM_UPPER_A_TO_Z - code;
  if (isLowerrCase(code)) return SUM_LOWER_A_TO_Z - code;
  return code;
}

function problem4(word) {
  var answer;
  return answer;
}
module.exports = problem4;
