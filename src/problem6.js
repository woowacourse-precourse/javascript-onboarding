function problem6(forms) {
  let answer = [];

  for (let form of forms) {
    const cases = words(form[1]);
  }

  return answer;
}

// 가능한 연속된 문자열 추출 함수
function words(name) {
  const wordOfCases = [];
  let end = name.length;

  for (let index = 0; index < name.length; index++) {
    for (let count = 2; count <= end; count++) {
      wordOfCases.push(name.substr(index, count));
    }
    end -= 1;
  }

  return wordOfCases;
}

module.exports = problem6;
