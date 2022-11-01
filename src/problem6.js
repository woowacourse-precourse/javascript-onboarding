function problem6(forms) {
  var answer = [];
  let duplicateWord;
  const twoWordsMap = new Map()
  const crewMap = new Map(forms)

  for (let e of forms) {
    const oneOfNames = e[1].split('')

    for (let i = 0; i < oneOfNames.length - 1; i++) {
      const twoWordOFName = oneOfNames[i] + oneOfNames[i + 1]
      if (twoWordsMap.has(twoWordOFName)) {
        twoWordsMap.set(twoWordOFName, twoWordsMap.get(twoWordOFName) + 1)
      } else {
        twoWordsMap.set(twoWordOFName, 1)
      }
    }
  }

  for (let key of twoWordsMap.keys()) {
    if (twoWordsMap.get(key) > 1) {
      duplicateWord = key;
    }
  }

  for (let email of crewMap.keys()) {
    if (crewMap.get(email).includes(duplicateWord)) {
      answer.push(email);
    }
  }

  answer.sort((a, b) => a.localeCompare(b));
  return answer;
}

module.exports = problem6;