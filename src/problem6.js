function problem6(forms) {
  let answer = [];
  let map = new Map();
  // 닉네임을 2글자씩 map에 key로 입력, 개수를 value로 입력
  for (let i = 0; i < forms.length; i++) {
    let nname = forms[i][1];
    for (let j = 0; j < nname.length - 1; j++) {
      const token = nname.substr(j, 2);
      if (!map.has(token)) {
        map.set(token, 1);
      } else {
        map.set(token, map.get(token) + 1);
      }
    }
  }
  // map의 key중 2번 이상 나온 key만 answer 배열에 push
  let mapList = [...map];
  let answerTok = [];
  for (item of mapList) {
    if (item[1] <= 1) continue;
    else {
      answerTok.push(item[0]);
    }
  }
  // answerTok의 token을 포함한 nickname의 이메일을 answer 배열에 push
  for (let i = 0; i < forms.length; i++) {
    let nname = forms[i][1];
    for (let token of answerTok) {
      if (nname.includes(token)) {
        answer.push(forms[i][0]);
      }
    }
  }
  // anwer 배열을 오름차순 정렬
  answer = answer.sort();
  return answer;
}

module.exports = problem6;
