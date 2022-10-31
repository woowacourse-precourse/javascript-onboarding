function problem4(word) {
  var answer = result(word);
  return answer;
}

function result(word) {
  let sum = "";

  for (let i = 0; i < word.length; i++) {
    const element = word[i];
    sum += convertWord(element);
  }

  return sum;
}

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

function checkUpperCase(element) {
  if (element === element.toUpperCase()) return true; // 대문자인지 아닌지 확인
  return false;
}

function convertWord(element) {
  if (element === " ") return element; // 아무것도 입력되지 않았을 때 예외처리

  const isUpperLetter = checkUpperCase(element);

  if (isUpperLetter) {
    // 대문자에서 찾기
    const idx = UPPERCASE.split("").indexOf(element); // word를 나눈 요소 하나하나 비교하여 해당 idx 찾기.
    return UPPERCASE[25 - idx]; // 0~25까지
  } else {
    // 소문자에서 찾기
    const idx = LOWERCASE.split("").indexOf(element);
    return LOWERCASE[25 - idx];
  }
}

module.exports = problem4;
