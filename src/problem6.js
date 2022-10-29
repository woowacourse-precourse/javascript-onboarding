function problem6(forms) {
  if (forms.length < 1 || forms.length > 10000) return;

  const result = [];

  // 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어있는지 확인. 맞다면 result 배열에 푸쉬.
  forms.forEach((element, startPoint) => {
    for (let i = startPoint + 1; i < forms.length; i++) {
      for (let j = 0; j < element[1].length - 1; j++) {
        if (forms[i][1].search(element[1].substr(j, 2)) !== -1) {
          result.push(element, forms[i]);
        }
      }
    }
  });

  // result의 결과로 나온 중복된 것들 제거 위해 오브젝트로 변형
  const reduced = result.reduce((pre, cur) => {
    pre[cur[0]] = null;
    return pre;
  }, {});

  // 정렬해서 배열로 리턴.
  return Object.keys(reduced).sort();
}

module.exports = problem6;
