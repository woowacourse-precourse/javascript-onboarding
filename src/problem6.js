function problem6(forms) {
  var answer;
  return answer;
}

function getRepeatedWords(forms) {
  let wordFrequencyCount = {}
  let repeatedWords = []
  forms.forEach((form) => {
      let words = formAnalyzer(form).keys()
      for (let word of words) {
          wordFrequencyCount[word] ? wordFrequencyCount[word] += 1 : wordFrequencyCount[word] = 1
      }
  })
  for (let word in wordFrequencyCount) {
      if (wordFrequencyCount[word] > 1) repeatedWords.push(word)
  }
  return repeatedWords
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
