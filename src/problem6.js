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
}

module.exports = problem6;
