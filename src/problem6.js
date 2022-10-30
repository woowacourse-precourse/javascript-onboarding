function problem6(forms) {
  var answer = [];
  let nameArr = [];

  for (let i = 0; i < forms.length; i++) {
    nameArr.push(forms[i][1]);
  }

  let twoChar = [];

  for (let i = 0; i < nameArr.length; i++) {
    for (let j = 0; j+2 <= nameArr[i].length; j++) {
       twoChar.push(nameArr[i].substring(j, j+2));
    }
  }

  const findDuplicates = twoChar => twoChar.filter((item, index) => twoChar.indexOf(item) !== index)
  const duplicates = findDuplicates(twoChar);
  
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < duplicates.length; j++) {
     if (forms[i][1].includes(duplicates[j])) {
      answer.push(forms[i][0]);
     }
   }
  }

  answer = [...new Set(answer)];
  answer.sort();

  return answer;
}

module.exports = problem6;
