function problem6(forms) {
  const obj = {}
  let answer = []

  for (let [email, nickname] of [...forms, forms[0]]) {
    nickname.split("").reduce((prev, curr) => {
      if (obj[prev] && obj[prev].includes(curr)) answer.push(email)
      else if (obj[prev]) {
        obj[prev].push(curr)
      }

      if (!obj[curr]) obj[curr] = []
      return curr
    }, 0)
  }

  answer = new Set(answer)
  if (answer.length <= 1) answer = []

  return [...answer].sort((a, b) => a.localeCompare(b))
}

module.exports = problem6
