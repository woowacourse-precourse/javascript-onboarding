function problem6(forms) {
  const patternMap = new Map();
  const resultSet = new Set();

  for (let i = 0; i < forms.length; i++) {
    const [email, name] = forms[i];

    for (let j = 0; j < name.length - 1; j++) {
      const slicedName = name.substr(j, 2);
      if (patternMap.has(slicedName)) {
        resultSet.add(patternMap.get(slicedName));
        resultSet.add(email);
      } else {
        patternMap.set(slicedName, email);
      }
    }
  }

  return [...resultSet].sort();
}

module.exports = problem6;
