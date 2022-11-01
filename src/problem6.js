function problem6(forms) {
  let wordList = [];
  let answerList = [];

  for (let i=0; i < forms.length; i++) {
    for (let j=0; j < forms[i][1].length-1; j++) {
      if (wordList.includes(forms[i][1].substring(j, j+2))) {
        answerList.push(forms[i][0])
        answerList.push(forms[j][0])
      }
      wordList.push(forms[i][1].substring(j, j+2))
    }
  }
}

module.exports = problem6;
