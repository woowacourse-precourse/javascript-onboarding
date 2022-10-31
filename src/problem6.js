function problem6(forms) {
  let answer = [];

  for (let form of forms) {
    const cases = words(form[1]);
    // 다른 사람들 닉네임이 이 단어 포함하는지 확인
    for (let word of cases) {
      for (let index = 0; index < forms.length; index++) {
        if (forms[index][0] === form[0]) continue;
        if (forms[index][1].includes(word)) {
          answer.push(forms[index][0]);
          answer.push(form[0]);
        }
      }
    }
  }

  const set = new Set(answer);

  answer = [...set];
  answer.sort((a, b) => {
    const a_nick = a.slice(0, -10);
    const b_nick = b.slice(0, -10);

    if (a_nick > b_nick) return 1;
    if (a_nick < b_nick) return -1;
    if (a_nick === b_nick) return 0;
  });

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
