function problem1(pobi, crong) {
  var answer;

  // 책의 길이가 2가 넘는 경우
  if (pobi.length !== 2 || crong.length !== 2) return -1;

  // 왼쪽 페이지, 오른쪽 페이지가 순서대로 들어있다. ( 둘의 차가 1이다. )
  const subtractBookPage = (array) =>
    array.reduce((previousValue, currentValue) => currentValue - previousValue);
  if (subtractBookPage(pobi) !== 1 || subtractBookPage(crong) !== 1) return -1;

  // 책의 좌측페이지는 홀수, 우측페이지는 짝수여야 한다.
  const isOddOrEven = (number) => (number % 2 === 0 ? "even" : "odd");

  if (
    isOddOrEven(pobi[0]) !== "odd" ||
    isOddOrEven(crong[0]) !== "odd" ||
    isOddOrEven(pobi[1]) !== "even" ||
    isOddOrEven(pobi[1]) !== "even"
  )
    return -1;

  const compareSumAndMultiply = (array) => {
    const convertArray = String(array).split("").map(Number);
    const sum = convertArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    const multiply = convertArray.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
    return sum >= multiply ? sum : multiply;
  };

  const pobiValue =
    compareSumAndMultiply(pobi[0]) > compareSumAndMultiply(pobi[1])
      ? compareSumAndMultiply(pobi[0])
      : compareSumAndMultiply(pobi[1]);
  const crongValue =
    compareSumAndMultiply(crong[0]) > compareSumAndMultiply(crong[1])
      ? compareSumAndMultiply(crong[0])
      : compareSumAndMultiply(crong[1]);

  answer = pobiValue - crongValue;
  if (answer > 0) return 1;
  if (answer < 0) return 2;
  if (answer === 0) return 0;
}

module.exports = problem1;
