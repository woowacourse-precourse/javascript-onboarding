function problem6(forms) {
  var answer=[];
  for(const trainee of forms) {
    let nickname = trainee[1];
    let foundOverlap = false;
    for(let i = 0; i < nickname.length - 1; i++) {
      let str = nickname[i] + nickname[i+1];
      for(let j = forms.indexOf(trainee)+1; j < forms.length; j++) {
        let comparisonTarget = forms[j];
        if(comparisonTarget[1].includes(str)) {
          answer.push(comparisonTarget[0]);
          forms.splice(j, 1);
          foundOverlap = true;
          j--;
        }
      }
    }
    if(foundOverlap) {
      answer.push(trainee[0]);
      forms.splice(forms.indexOf(trainee), 1);
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
