function problem1(pobi, crong) {
  let answer;
  // 1. pobi의 각 자리 숫자를 모두 더하거나, 모두 곱해 그 중 가장 큰 수 고르기
  const pobiCalculations = [];
  pobiCalculations.push(String(pobi[0]).split('').map((num) => +num).reduce((a, b) => a + b))
  pobiCalculations.push(String(pobi[0]).split('').map((num) => +num).reduce((a, b) => a * b))
  pobiCalculations.push(String(pobi[1]).split('').map((num) => +num).reduce((a, b) => a + b))
  pobiCalculations.push(String(pobi[1]).split('').map((num) => +num).reduce((a, b) => a * b))
  const pobiScore = pobiCalculations.sort((a, b) => b - a)[0];

  // 2. crong의 각 자리 숫자를 모두 더하거나, 모두 곱해 그 중 가장 큰 수 고르기
  const crongCalculations = [];
  crongCalculations.push(String(crong[0]).split('').map((num) => +num).reduce((a, b) => a + b))
  crongCalculations.push(String(crong[0]).split('').map((num) => +num).reduce((a, b) => a * b))
  crongCalculations.push(String(crong[1]).split('').map((num) => +num).reduce((a, b) => a + b))
  crongCalculations.push(String(crong[1]).split('').map((num) => +num).reduce((a, b) => a * b))
  const crongScore = crongCalculations.sort((a, b) => b - a)[0];
  return answer;
}

// module.exports = problem1;