function problem6(forms) {
  const targetEmail = []
  const wordCase = {}
  forms.forEach((form) => {
    const email = form[0]
    wordOfCrew(form).forEach((word) => {
      if (!wordCase[word]) wordCase[word] = email
      else {
        const presavedEmail = wordCase[word]
        targetEmail.push(presavedEmail)
        targetEmail.push(email)
      }
    })
  })
  return [...new Set(targetEmail)].sort()
} 

function wordOfCrew(form) {
  const nickname = form[1]
  const wordList = []
  for (let char = 0; char < nickname.length - 1; char++) {
    wordList.push(nickname.substring(char, char + 2))
  }
  return [...new Set(wordList)]
}

module.exports = problem6;
