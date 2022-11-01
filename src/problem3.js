function problem3(number) {
  var answer = solution(number);
  return answer;
}

function solution(number){
  let count = 0;
  for(let i = 1; i <= number; i++){
    const numArr = String(i);
    for(let n of numArr){
      if(n === '3' || n === '6' || n === '9'){
        count += 1;
      }
    }
  }

  return count;
}

module.exports = problem3;
