function problem6(forms) {
  const dupList = {};
  const subStrList = {};

  // 두 글자만 중복돼도 중복
  for (let [, nickname] of forms) {
    for (let i = 0; i < nickname.length - 1; i++) {
      const subStr = nickname.substring(i, i + 2);
      const prev = subStrList[nickname] || [];
      dupList[subStr] = ++dupList[subStr] || 1;
      subStrList[nickname] = [...prev, subStr];
    }
  }

  const answer = forms
    .map(([email, nickname]) => {
      let isDup = false;
      for (let subStr in dupList) {
        const cnt = dupList[subStr];
        if (nickname.includes(subStr) && cnt > 1) {
          isDup = true;
          break;
        }
      }

      if (isDup) return email;
    })
    .filter((v) => v);

  return answer;
}

module.exports = problem6;
