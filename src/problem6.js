function problem6(forms) {
  const nickCaseMap = new Map();
  const getAllCase = (name) => {
    for (let i = 0; i < name.length - 1; i++) {
      const key = name.slice(i, i + 2);
      if (nickCaseMap.get(key)) nickCaseMap.set(key, nickCaseMap.get(key) + 1);
      else nickCaseMap.set(key, 1);
    }
  };

  forms.forEach(([_, nickName]) => getAllCase(nickName));

  const dupliNickNames = Array.from(nickCaseMap)
    .filter(([_, count]) => count > 1)
    .map(([nickName, _]) => nickName);

  const answer = forms
    .filter(([_, nickName]) =>
      dupliNickNames.some((el) => nickName.includes(el))
    )
    .map(([email, _]) => email)
    .sort();

  return answer;
}

module.exports = problem6;
