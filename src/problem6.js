function problem6(forms) {
  var answer;

  const nameList = [];

  // 닉네임 두 글자 리스트 생성
  const makeList = (twoWord) => {
    if (!nameList.find(e => e.name === twoWord)) {
      nameList.push({ name: twoWord, count: 0 });
    }
  }

  // 중복 여부 확인
  const checkList = (twoWord) => {
    for (let i = 0; i < nameList.length; i++) {
      if (nameList[i].name === twoWord) {
        nameList[i].count++;
      }
    }
  }

  for (let i = 0; i < forms.length; i++) {
    for (let j = 1; j < forms[i][1].length; j++) {
      const twoWord = [forms[i][1][j - 1], forms[i][1][j]].join('');
      makeList(twoWord);
      checkList(twoWord);
    }
  }

  console.log(nameList);

  return answer;
}

module.exports = problem6;
