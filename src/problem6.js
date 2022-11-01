function problem6(forms) {
  const len = forms.length;
  const checkMap = new Map();
  const emailSet = new Set();

  // forms[i][0]: 이메일, forms[i][1]: 닉네임
  for (let i=0; i<len; i++) {
    const nickname = forms[i][1];
    for (let j=0; j<nickname.length-1; j++) {
      const part = nickname.substr(j, 2);
      if (checkMap.has(part)) checkMap.set(part, checkMap.get(part) + 1);
      else checkMap.set(part, 1);
    }
  }

  for (const [key, value] of checkMap) {
    if (value > 1) {
      for (let i=0; i<len; i++) {
        const email = forms[i][0];
        const nickname = forms[i][1];
        if (nickname.indexOf(key) > -1) emailSet.add(email);
      }
    }
  }

  // cf. 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 지원자의 이메일 목록을 return
  // cf. result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거
  return Array.from(emailSet).sort();
}

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]));

module.exports = problem6;
