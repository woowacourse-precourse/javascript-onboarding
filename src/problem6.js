function problem6(forms) {
  // 반복되는 단어 모음
  const target = [];

  // 결과값
  const answer = [];

  // 연속되는 글자들이 몇번 등장하는지 적어두기
  const wordMap = new Map();

  // wordMap 채우기
  for (let i = 0; i < forms.length; ++i) {
    for (let j = 0; j < forms[i][1].length - 1; ++j) {
      // word 2개씩 자르기
      const word = forms[i][1].substr(j, 2);
      if (!wordMap.has(word)) wordMap.set(word, 1);
      else wordMap.set(word, wordMap.get(word) + 1);
    }
  }

  const wordSet = [...wordMap];

  for (let i = 0; i < wordSet.length; ++i) {
    if (wordSet[i][1] > 1) target.push(wordSet[i][0]);
  }

  for (let i = 0; i < forms.length; ++i) {
    for (let j = 0; j < target.length; ++j) {
      if (forms[i][1].includes(target[j])) answer.push(forms[i][0]);
    }
  }

  answer.sort();

  return answer;
}

module.exports = problem6;
