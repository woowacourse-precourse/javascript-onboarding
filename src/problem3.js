function problem3(number) {
  let answer = null;
  
  
  for(let i = 1; i <= number; i++) {
    answer += countTargetNumbers(i);
  }
  return answer;
}

function countTargetNumbers(num) {
  let count = 0;
  while(num > 0) {
    let n = num % 10;
    if(n == 3 || n == 6 || n == 9) count++;
    num = Math.floor(num/10);
  }

  return count;
}

// console.log(problem3(13));
// console.log(problem3(33));

module.exports = problem3;
