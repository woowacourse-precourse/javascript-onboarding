function problem1(pobi, crong) {
  let answer;
  // 예외 처리
  if (pobi[1] !== (pobi[0] + 1) || crong[1] !== (crong[0] + 1)) {
    answer = -1;
    return answer;
  } 
  if (pobi[0] % 2 === 0 || pobi[1] % 2 === 1 || crong[0] % 2 === 0 || pobi[1] % 22 === 1) {
    answer = -1;
    return answer;
  }
  if (pobi[1] !== (pobi[0] + 1) || crong[1] !== (crong[1] + 1)) {
    answer = -1;
    return answer;
  }
  if (pobi[0] === 1 || pobi[0] === 399 || pobi[1] === 2 || pobi[1] === 400 || crong[0] === 1 || crong[0] === 399 || crong[1] === 2 || crong[1] === 400) {
    answer = -1;
    return answer;
  }
  
  function letterSum(number) {
    let sum = 0;
    let arr = number.toString().split("").map(x => parseInt(x));
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum;
  }

  function letterMultiply(number) {
    let multiply = 1;
    let arr = number.toString().split("").map(x => parseInt(x));
    for (let i = 0; i < arr.length; i++) {
      multiply *= arr[i]
    }
    return multiply;
  }

  // 각각의 점수 계산하기
  // pobi
  let pobiLeftSum = 
  let pobiLeftMultiply = 
  let pobiLeftBig = 

  let pobiRightSum = 
  let pobiRightMultiply = 
  let pobiRightBig = 

  let pobiFinalBig = 

  // crong
  let crongLeftSum = 
  let crongLeftMultiply = 
  let crongLeftBig = 

  let crongRightSum = 
  let crongRightMultiply = 
  let crongRightBig = 

  let crongFinalBig = 
}

module.exports = problem1;


console.log(problem1([1, 2] , [6, 4]));