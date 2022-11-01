function getDuplicatedWords(forms, i) {
  return [...forms[i][1]].filter(word => forms[i+1][1].includes(word)).join('');
}

function problem6(forms) {
  var answer;

  for(let i=0; i < forms.length - 1; i++) {
    let duplicatedWords = getDuplicatedWords(forms, i);
  }

  return answer;
}

module.exports = problem6;
