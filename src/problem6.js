function problem6(forms) {
  var answer;
  let resultArr = [];
  for (let i = 1; i < forms.length ; i++) {
    let comparisonArr = [];
    let comapredArr = [];
    let firstNick = forms[0][1];

    makePossibleArr(firstNick);
    console.log(makePossibleArr(firstNick));
    
    
    
    let temp = forms[0];

    let length = forms.length - i;



    for (let p = 1; p <= length; p++) {

      // let comparedArr = [...forms[p][1]];
      // let intersection = afterFilter.filter(x => comparedArr.includes(x));
      // let overlap = intersection.join('');
      // console.log(overlap);
      // console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
    }
    
    forms[0] = forms[length];
    forms[length] = temp;
    
    
    
  }
  console.log(resultArr);
  return answer;
}

function makePossibleArr(string) {
  let possibleArr =[];
  for (let k = 0; k < string.length; k++) {
    for (let j = 0; j < string.length + 1; j++) {
    if (j - k >= 0) possibleArr.push(string.substring(k, j));
  }
}
return possibleArr.filter(x => x.length > 1);
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
module.exports = problem6;
