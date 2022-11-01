function getDuplicatedWords(forms, i) {
  return [...forms[i][1]].filter(word => forms[i+1][1].includes(word)).join('');
}

function checkDuplicate(forms, crews, words) {
  forms.forEach(form => {
    if (form[1].includes(words))
      crews.add(form);
  });
  return crews;
}

function problem6(forms) {
  var answer;

  let checkedWords = [];
  let crewsWithDuplicated = new Set();

  for(let i=0; i < forms.length - 1; i++) {
    let duplicatedWords = getDuplicatedWords(forms, i);
    if (duplicatedWords && !checkedWords.includes(duplicatedWords)){
      crewsWithDuplicated = checkDuplicate(forms, crewsWithDuplicated, duplicatedWords);
    } else {
      checkedWords.push(duplicatedWords);
    }
  }

  return answer;
}

module.exports = problem6;
