function problem6(forms) {
  var answer = [];
  const crewName = new Map()
  const formsMap = new Map(forms)

  forms.forEach((e) => {
    const oneOfNames = e[1].split('')
    console.log(oneOfNames)
    for (let i = 0; i < oneOfNames.length - 1; i++) {
      const twoWordOFName = oneOfNames[i] + oneOfNames[i + 1]
      if (crewName.has(twoWordOFName)) {
        crewName.set(twoWordOFName, crewName.get(twoWordOFName) + 1)
      } else {
        crewName.set(twoWordOFName, 1)
      }
    }
  }
  )

  let asd = Array.from(crewName.keys())

  asd.forEach((key) => {
    if (crewName.get(key) > 1) {
      for (let email of formsMap.keys()) {
        if (formsMap.get(email).includes(key)) {
          answer.push(email)
        }
      }
    }
  })

  answer.sort((a, b) => a.localeCompare(b))
  console.log(answer)
  return answer;
}


problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]])
module.exports = problem6;