function problem1(pobi, crong) {
  // 찢어진 페이지가 있는 예외사항 발생
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
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
