function problem6(forms) {
  let patternMap = new Map();
  let resultSet = new Set();

  for (let i = 0; i < forms.length; i++) {
    let name = forms[i][1];
    let email = forms[i][0];

    for (let j = 0; j < name.length - 1; j++) {
      let slicedName = name.substr(j, 2);
      if (patternMap.has(slicedName)) {
        resultSet.add(patternMap.get(slicedName));
        resultSet.add(email);
      } else {
        patternMap.set(slicedName, email);
      }
    }
  }

  return [...resultSet].sort();
  s;
}

module.exports = problem6;
