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
      }
    })
  })
  return [...new Set(targetEmail)].sort()
} 

function wordOfCrew(form) {
  let nickname = form[1]
  let wordList = []
  for (let char = 0; char < nickname.length - 1; char++) {
    wordList.push(nickname.substring(char, char + 2))
  }
  return [...new Set(wordList)]
}

module.exports = problem6;
