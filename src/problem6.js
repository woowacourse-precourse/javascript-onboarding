function problem6(forms) {
  var answer;
  let data = new Map(); 

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const test = forms[i][1].substr(j, 2);
      data.set(test);
    }    
  }
  
  return answer;
}

module.exports = problem6;
