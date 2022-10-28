function problem1(pobi, crong) {
  let answer;
  // 예외 처리
  if (pobi[1] !== (pobi[0] + 1) || crong[1] !== (crong[0] + 1)) {
    answer = -1;
    return answer;
  } 
  if (pobi[0] % 2 === 0 || pobi[1] % 2 === 1 || crong[0] % 2 === 0 || pobi[1] % 2 === 1) {
    answer = -1;
    return answer;
  }
  if (pobi[0] === 1 || pobi[0] === 399 || pobi[1] === 2 || pobi[1] === 400 || crong[0] === 1 || crong[0] === 399 || crong[1] === 2 || crong[1] === 400) {
    answer = -1;
    return answer;
  }
  if (pobi[0] < 1 || pobi[0] > 400 || pobi[1] < 1 || pobi[1] > 400 || crong[0] < 1 || crong[0] > 400 || crong[1] < 1 || crong[1] > 400) {
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
  let pobiLeftSum = letterSum(pobi[0]);
  let pobiLeftMultiply = letterMultiply(pobi[0]);
  let pobiLeftBig = Math.max(pobiLeftSum, pobiLeftMultiply)

  let pobiRightSum = letterSum(pobi[1]);
  let pobiRightMultiply = letterMultiply(pobi[1]);
  let pobiRightBig = Math.max(pobiRightSum, pobiRightMultiply)

  let pobiResult = Math.max(pobiLeftBig,pobiRightBig);

  // crong
  let crongLeftSum = letterSum(crong[0]);
  let crongLeftMultiply = letterMultiply(crong[0]);
  let crongLeftBig = Math.max(crongLeftSum, crongLeftMultiply);

  let crongRightSum = letterSum(crong[1]);
  let crongRightMultiply = letterMultiply(crong[1]);
  let crongRightBig = Math.max(crongRightSum, crongRightMultiply);

  let crongResult = Math.max(crongLeftBig, crongRightBig);

  // 승패 나누기
  if (pobiResult > crongResult) {
    answer = 1
  } else if (crongResult > pobiResult) {
    answer = 2
  } else {
    answer = 0
  }

  return answer;
}

module.exports = problem1;
