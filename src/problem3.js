function problem3(number) {
  if (inputExecption(number)) {
    var answer;
    let cnt = 0;
    for (i = 1; i <= number; i++) {
      let numberCompare = String(i).match(/[369]/g);
      console.log(numberCompare);
      if (numberCompare != null) cnt += numberCompare.length;
    }
    answer = cnt;
    
    return answer;
  }
  
}

console.log(problem3(33));
module.exports = problem3;

function inputExecption(num) {
  let inputCheck = true;
  if (num < 1 || num > 1000) inputCheck = false;
  return inputCheck;
}