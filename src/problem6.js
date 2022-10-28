function problem6(forms) {

  const map = new Map();
  for(let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const consistentWord = forms[i][1].substring(j, j+2);
      if(map.has(consistentWord)) {
        map.set(consistentWord, map.get(consistentWord) + 1);
      } else {
        map.set(consistentWord, 1);
      }
    }
  }
  const consistentWord = [...map].filter(name => name[1] > 1).reduce((a,c) => a.concat(c));
  let answer = [];
  for(const nickName of forms) {
    if(nickName[1].includes(consistentWord[0])) {
      answer.push(nickName[0]);
    }
  }
  return answer.sort();
}

module.exports = problem6;
