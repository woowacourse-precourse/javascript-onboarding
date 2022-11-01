function problem1(pobi, crong) {
  // 찢어진 페이지가 있거나 페이지 순서가 뒤죽박죽인 예외사항 발생
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  // 왼쪽이 홀수 페이지가 아니거나 오른쪽이 짝수 페이지가 아닌 예외사항 발생
  if (
    pobi[0] % 2 !== 1 ||
    crong[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[1] % 2 !== 0
  ) {
    return -1;
  }

  // pobi, crong에 담긴 값이 형식에 맞지 않는 예외사항 발생
  if (pobi.length !== 2 || crong.length !== 2) {
    return -1;
  }

  // 1보다 작은 페이지, 400보다 큰 페이지가 있는 예외사항 발생
  if (pobi[0] < 1 || crong[0] < 1 || pobi[1] > 400 || crong[1] > 400) {
    return -1;
  }

  const pobiMax = Math.max(
    eachDigitCalculation(pobi[0]),
    eachDigitCalculation(pobi[1])
  );
  const crongMax = Math.max(
    eachDigitCalculation(crong[0]),
    eachDigitCalculation(crong[1])
  );
  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else if (pobiMax === crongMax) return 0;
  else return -1;
}

// 숫자를 넣었을 때 각 자리수를 분리해서 곱해보고, 더해본 뒤 두 연산 중 결과가 큰 수를 return 하는 함수
const eachDigitCalculation = (num) => {
  const stringNum = num.toString();
  let sum = 0;
  let product = 1;

  for (const eachDigit of stringNum) {
    sum += Number(eachDigit);
    product *= eachDigit;
  }

  return Math.max(sum, product);
};

module.exports = problem1;
