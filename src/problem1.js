function problem1(pobi, crong) {
  // 4. 예외사항인 경우 -1을 리턴하기
  // 4-1. 한 사람 당 페이지가 2개가 들어오지 않은 경우
  if (pobi.length !== 2 || crong.length !== 2) return -1

  // 4-2. 페이지가 1보다 작거나 400보다 큰 경우
  if (pobi[0] < 1 || pobi[1] > 400 || crong[0] < 1 || crong[1] > 400) return -1

  // 4-3. 페이지 짝수 자리에 홀수가 들어오거나, 홀수 자리에 짝수가 들어오는 경우
  if (pobi[0] % 2 === 0 || pobi[1] % 2 !== 0 || crong[0] % 2 === 0 || crong[1] % 2 !== 0) return -1

  // 4-4. 페이지 쪽 수가 한 장 이상 나는 경우
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return -1

  // 4-5. 시작 면이나 마지막 면이 나오도록 책을 펼친 경우 (이 예외사항에 대해서 다시 생각해보기)
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400) return -1

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

  // 3. pobi의 점수와 crong의 점수를 비교하여 포비가 이기면 1, 크롱이 이기면 2, 무승부는 0을 리턴하기
  if (pobiScore > crongScore) return 1
  if (pobiScore < crongScore) return 2
  if (pobiScore === crongScore) return 0

  // 4-5. 혹시나 남은 예외 사항이 있을 경우를 위해 return -1 (다시 생각해보기)
  return -1;
}

module.exports = problem1;