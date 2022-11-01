function problem6(forms) {
  var answer = [];

  const nameList = [];

  // 두 글자 단위 리스트 생성
  const makeList = (twoWord) => {
    if (!nameList.find(e => e.name === twoWord)) {
      nameList.push({ name: twoWord, count: 0 });
    }
  }

  // 중복 글자 체크
  const checkList = (twoWord) => {
    for (let i = 0; i < nameList.length; i++) {
      if (nameList[i].name === twoWord) {
        nameList[i].count++;
      }
    }
  }

  // 중복 크루 검출
  const findOver = (twoWord) => {
    for (let i = 0; i < nameList.length; i++) {
      if ((nameList[i].name === twoWord) && (nameList[i].count > 1)) {
        return -1
      }
    }
    return 0;
  }

  for (let i = 0; i < forms.length; i++) {
    for (let j = 1; j < forms[i][1].length; j++) {
      const twoWord = [forms[i][1][j - 1], forms[i][1][j]].join('');
      makeList(twoWord);
      checkList(twoWord);
    }
  }

  for (let i = 0; i < forms.length; i++) {
    for (let j = 1; j < forms[i][1].length; j++) {
      const twoWord = [forms[i][1][j - 1], forms[i][1][j]].join('');
      if (findOver(twoWord) < 0) {
        answer.push(forms[i][0]);
      }
    }
  }

  answer.sort();

  return answer;
}

module.exports = problem6;