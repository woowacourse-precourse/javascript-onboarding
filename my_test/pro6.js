function problem6(forms) {
  if (!inputExecption(forms)) return console.log(`오류~~`);
  var answer;
  let resultArr = [];

  for (let i = 1; i < forms.length ; i++) {
    let comparisonArr = [];
    let firstNick = forms[0][1];
    let temp = forms[0];
    let length = forms.length - i;
    comparisonArr = makeArrCases(firstNick);
    
    console.log(i)
    let comparedArr = [];
    for (let p = 1; p <= forms.length - i; p++) {
      let remainderNick = forms[p][1];
      comparedArr = makeArrCases(remainderNick);
      let intersection = comparedArr.filter(x => comparisonArr.includes(x));
      
      if (intersection != '') {
        resultArr.push(forms[p][0]);
        resultArr.push(forms[0][0]);
        console.log("여기다 : "+resultArr);
      }
    }
    
    forms[0] = forms[length];
    forms[length] = temp;
  }
  const SET = new Set(resultArr);
  const FINALARR = [...SET];
  answer = FINALARR.sort();
  return answer;
}

function pushtoResultArr(forms, ) {

}

function makeArrCases(string) {
  let possibleArr =[];
  for (let k = 0; k < string.length; k++) {
    for (let j = 0; j < string.length + 1; j++) {
    if (j - k >= 0) possibleArr.push(string.substring(k, j));
  }
}
return possibleArr.filter(x => x.length > 1);
}

function inputExecption(arr) {
  let emailForm = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let emailLast = /email.com$/;
  let koreanForm = /[가-힣]/;
  let inputCheck = true;
  if (arr.length < 1 || arr.length > 10000) inputCheck = false;
  for (let q = 0; q < arr.length - 1; q++) {
    if (!emailForm.test(arr[q][0])) inputCheck = false;
    else if (!emailLast.test(arr[q][0])) inputCheck = false;
    else if (arr[q][0].length < 11 || arr[q][0].length > 20 ) inputCheck = false;
    else if (!koreanForm.test(arr[q][1])) inputCheck = true;
    else if (arr[q][1].lenth < 1 || arr[q][1].lenth > 20) inputCheck = false;
    
  } 
  return inputCheck;
}

module.exports = problem6;
console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);
