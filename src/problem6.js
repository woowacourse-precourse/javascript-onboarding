function problem6(forms) {
  let targetEmail = []
  let wordCase = {}
  for (let form of forms) {
    let email = form[0]
    let nickname = form[1]
    let wordList = []
    for (let i = 0; i < nickname.length - 1; i++) {
      wordList.push(nickname.substring(i, i + 2))
    }
    for (let word of wordList) {
      if (!wordCase[word]) wordCase[word] = email
      else {
        let presavedEmail = wordCase[word]
        targetEmail.push(presavedEmail)
        targetEmail.push(email)
      }
    }
  }
  return [...new Set(targetEmail)].sort()
} 

module.exports = problem6;
