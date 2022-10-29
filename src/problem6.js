function problem6(forms) {
  var answer;
  let data = new Map(); 

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const test = forms[i][1].substr(j, 2);
      if (data.has(test)) {
        data.set(test, data.get(test) + 1);
      } else {
        data.set(test, 1);
      }
    }    
  }
  
  let standard = [...data];
  let check = [];
  for (let i = 0; i < standard.length; i++) {
    if (standard[i][1] > 1) {
      check.push(standard[i][0]);
    }
  }

  let result = [];
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].includes(check)) {
      result.push(forms[i][0]);
    }
  }
  
  result.sort();
  return result;

  return answer;
}

module.exports = problem6;
