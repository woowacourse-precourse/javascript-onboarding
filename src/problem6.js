function problem6(forms) {
  let answer = new Set();
  for(let i = 0; i < forms.length; i++) {
    for(let j = i + 1; j < forms.length; j++) {
      if(isDuplicated(forms[i][1], forms[j][1])) {
        answer.add(forms[i][0]);
        answer.add(forms[j][0]);
        forms.splice(j, 1);
        j--;
      }
    }
  }  
  answer = [...answer].sort();
  return answer;
}
function isDuplicated(name1, name2) {
  name1 = name1.split('');
  name2 = name2.split('');
  for(let i = 0; i < name1.length - 1; i++) {
    for(let j = 0; j < name2.length - 1; j++) {
      if(name1[i] === name2[j] && name1[i + 1] === name2[j + 1]) return true;
    }
  }
  return false;
}

module.exports = problem6;
