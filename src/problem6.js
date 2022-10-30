function problem6(forms) {
  var answer;
  return answer;
}

function formAnalyzer(form) {
  const getSubstring = (nickname) => {
      let substring = []
      for (let i = 0; i < nickname.length - 1; i++) {
          substring.push(nickname.substring(i, i + 2))
      }
      return new Set(substring)
  }
  let email = form[0]
  let matchingEmail = new Map()
  getSubstring(form[1]).forEach((word) => matchingEmail.set(word, email))
  return matchingEmail
}

module.exports = problem6;
