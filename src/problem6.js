function problem6(forms) {
  const result = [];
  const indexSet = new Set();
  const nicknameArr = forms.map((data) => data[1]);

  const piecesOfStr = cuttingStr(nicknameArr);

  // 2글자씩 쪼갠 단어들을 nicknameArr에 있는 nickname들과 비교한 뒤, 한 단어조각이 2번 이상 발견되면 발견된 nickname들의 index를 indexSet에 모아둠
  piecesOfStr.forEach((word) => {
    let temp = [];

    nicknameArr.forEach((nickname, index) => {
      if (nickname.includes(word)) {
        temp.push(index);
      }
    });

    if (temp.length >= 2) {
      temp.forEach((index) => {
        indexSet.add(index);
      });
    }
  });

  // indexSet에 모인 index들을 이용하여 forms에 있는 email들을 result 배열에 넣음
  indexSet.forEach((filteredIndex) => {
    forms.forEach((data, index) => {
      if (filteredIndex === index) {
        result.push(data[0]);
      }
    });
  });

  result.sort();
  return result;
}

// 각 인덱스의 값이 문자열인 배열을 인자로 받아서, 각각의 문자열을 2글자씩 쪼개고 중복을 제거하여 모은 값들을 배열에 넣어서 반환하는 함수
const cuttingStr = (arr) => {
  const wordSet = new Set();

  arr.forEach((nickname) => {
    if (nickname.length >= 2) {
      for (let i = 0; i < nickname.length - 1; i++) {
        wordSet.add(nickname.substring(i, i + 2));
      }
    }
  });

  return [...wordSet];
};

module.exports = problem6;
