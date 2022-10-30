function problem4(word) {
  let answer = '';
  const upperCaseMap = new Map();
  let upperCaseCode = 90;

  // 1. 서로 반대로 대응되는 대문자를 담은 Map 객체 만드는 기능
  for (let ASCII = 65; ASCII <= 90; ASCII++) {
    upperCaseMap.set(String.fromCharCode(ASCII), String.fromCharCode(upperCaseCode));
    upperCaseCode--;
  }
  return answer;
}

module.exports = problem4;