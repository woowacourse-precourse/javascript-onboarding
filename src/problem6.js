function problem6(forms) {
  let targetEmail = []
  let wordCase = {}
  for (let form of forms) {
    let nickname = form[1]
    let wordList = []
    for (let i = 0; i < nickname.length - 1; i++) {
      wordList.push(nickname.substring(i, i + 2))
    }
  }
} 

module.exports = problem6;
