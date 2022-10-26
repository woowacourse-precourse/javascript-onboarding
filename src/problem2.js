function deleteDuplicate(string) {
  let prevString = string;
  let char = string[0];
  let currString = char;
  // Exception: 문자열 비었을 때
  if (string.length === 0) {
    return "";
  }
  for (i = 1; i < string.length; i++) {
    if (char !== string[i]) {
      currString = currString.concat(string[i]);
    } else {
      currString = currString.substring(0, currString.length - 1);
    }
    char = string[i];
  }
  if (prevString === currString) return currString;
  return deleteDuplicate(currString);
}

function problem2(cryptogram) {
  var answer;
  // Exception: 문자열 비었을 때
  if (cryptogram.length === 0) {
    return "";
  }
  answer = deleteDuplicate(cryptogram);
  return answer;
}

module.exports = problem2;
