function problem6(forms) {
  let answer = new Set();
  for(let i = 0; i < forms.length; i++) {
    for(let j = i + 1; j < forms.length; j++) {
      const userNickname = forms[i][1];
      const userEmail = forms[i][0];
      const otherUserNickname = forms[j][1];
      const otherUserEmail = forms[j][0];
      if(isDuplicated(userNickname, otherUserNickname)) {
        answer.add(userEmail);
        answer.add(otherUserEmail);
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
      const partOfName1 = name1[i] + name1[i + 1];
      const partOfName2 = name2[j] + name2[j + 1];
      if(partOfName1 === partOfName2) return true;
    }
  }
  return false;
}

module.exports = problem6;
