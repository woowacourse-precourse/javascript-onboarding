function problem6(forms) {
  var answer = [];
  const crewName = new Map()
  const formsMap = new Map(forms)

  for (let e of forms) {
    const oneOfNames = e[1].split('')

    for (let i = 0; i < oneOfNames.length - 1; i++) {
      const twoWordOFName = oneOfNames[i] + oneOfNames[i + 1]
      if(crewName.has(twoWordOFName)) {
        crewName.set(twoWordOFName, crewName.get(twoWordOFName) + 1)
      } else {
        crewName.set(twoWordOFName, 1)
      }
    }
  }
  
  for (let key of crewName.keys()) {
    if(crewName.get(key) > 1) {
      for(let email of formsMap.keys()) {
        if(formsMap.get(email).includes(key)) {
          answer.push(email)
        }
      }
    }
  }

  answer.sort((a, b) => a.localeCompare(b))
  return answer;
}

module.exports = problem6;