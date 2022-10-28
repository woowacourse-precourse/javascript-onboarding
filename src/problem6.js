function problem6(forms) {
  const nickCaseMap = new Map();
  const getAllCase = (name) => {
    for (let i = 0; i < name.length - 1; i++) {
      const key = name.slice(i, i + 2);
      if (nickCaseMap.get(key)) nickCaseMap.set(key, nickCaseMap.get(key) + 1);
      else nickCaseMap.set(key, 1);
    }
  };
  var answer;
  return answer;
}

module.exports = problem6;
