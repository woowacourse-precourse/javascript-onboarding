function problem6(forms) {
  var answer;
  
  for (let i = 1; i < forms.length -1 ; i++) {
    let comparisonArr = [...forms[0][1]];
    let temp = forms[0];
    let length = forms.length - i;

    for (let j = 1; j <= length; j++) {
      let comparedArr = [...forms[j][1]];
      let intersection = comparisonArr.filter(x => comparedArr.includes(x));
      
    }
    
    forms[0] = forms[length];
    forms[length] = temp;
    
    
    
  }
  console.log(Boolean(-1));
  return answer;
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
module.exports = problem6;
