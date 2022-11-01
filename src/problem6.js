function problem6(forms) {
  let targetEmail = []
  let wordCase = {}
  forms.forEach((form) => {
    let email = form[0]
    wordOfCrew(form).forEach((word) => {
      if (!wordCase[word]) wordCase[word] = email
      else {
        let presavedEmail = wordCase[word]
        targetEmail.push(presavedEmail)
        targetEmail.push(email)
        wordCase[word] = email
      }
    })
  })
  return [...new Set(targetEmail)].sort()
} 

function wordOfCrew(form) {
  let nickname = form[1]
  let wordList = []
  for (let i = 0; i < nickname.length - 1; i++) {
    wordList.push(nickname.substring(i, i + 2))
  }
  return wordList
}

module.exports = problem6;
