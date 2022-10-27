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

  // 3. pobi의 점수와 crong의 점수를 비교하여 포비가 이기면 1, 크롱이 이기면 2, 무승부는 0
  if (pobiScore > crongScore) return 1
  if (pobiScore < crongScore) return 2
  if (pobiScore === crongScore) return 0

  return answer;
}

// module.exports = problem1;