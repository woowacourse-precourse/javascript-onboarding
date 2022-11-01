function problem6(forms) {
  const nickName = forms.map((data) => data[1]);
  const duplicateNick = [];
  const keywords = [];
  const duplicateKeywords = [];
  const result = [];
  // 경우의 수에 있는 keyword 모두 추출
  for (let i = 0; i < nickName.length; i++) {
    for (let j = 0; j < nickName[i].length - 1; j++) {
      keywords.push(nickName[i].substring(j, j + 2));
    }
  }
  // 각 keyword 누적 카운드
  const duplicateKeywordsCount = keywords.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  // 중복 keyword 확인
  for (let idx in duplicateKeywordsCount) {
    if (duplicateKeywordsCount[idx] > 1) {
      duplicateKeywords.push(idx);
    }
  }
  // 대상 nickName 추출
  for (let idx in nickName) {
    if (nickName[idx].includes(duplicateKeywords)) {
      duplicateNick.push(nickName[idx]);
    }
  }
  // 대상 email 추출
  for (let i = 0; i < duplicateNick.length; i++) {
    forms.forEach((data) => {
      if (data[1] === duplicateNick[i]) {
        result.push(data[0]);
      }
    });
  }
  return result.sort();
}

module.exports = problem6;
