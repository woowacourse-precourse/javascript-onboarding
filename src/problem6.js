function problem6(forms) {
  const dupList = {};
  const subStrList = {};
  const emailSet = new Set();

  // 두 글자만 중복돼도 중복
  for (let [, nickname] of forms) {
    for (let i = 0; i < nickname.length - 1; i++) {
      const subStr = nickname.substring(i, i + 2);
      const prev = subStrList[nickname] || [];
      dupList[subStr] = ++dupList[subStr] || 1;
      subStrList[nickname] = [...prev, subStr];
    }
  }

  forms.map(([email, nickname]) => {
    for (let subStr in dupList) {
      const cnt = dupList[subStr];
      if (nickname.includes(subStr) && cnt > 1) {
        emailSet.add(email);
        break;
      }
    }
  });

  return Array.from(emailSet).sort();
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

module.exports = problem6;
