function containTwoChars(str1, str2) {
  for (let i = 0; i < str1.length - 2; i++) {
    const twoChars = str1.substring(i, i + 2)
    if (str2.includes(twoChars)) {
      return true
    }
  }
  return false
}

function problem6(forms) {
  const indiceMap = {}

  for (let i = 0; i < forms.length - 1; i++) {
    const firstName = forms[i][1]
    if (firstName.length === 1) {
      continue
    }

    for (let j = i + 1; j < forms.length; j++) {
      const secondName = forms[j][1]
      if (secondName.length === 1) {
        break
      }
      const isContained = containTwoChars(firstName, secondName)
      if (isContained) {
        indiceMap[i] = true
        indiceMap[j] = true
      }
    }
  }

  const indice = Object.keys(indiceMap)
  const answer = indice.map((index) => forms[index][0]).sort()
  return answer;
}

module.exports = problem6;
