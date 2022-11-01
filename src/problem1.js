function problem1(pobi, crong) {
  var answer;
  const [leftPobiBookNumber, rightPobiBookNumber] = pobi;
  const [leftCrongBookNumber, rightCrongBookNumber] = crong;

  if (pobi.length !== 2 || crong.length !== 2) return -1;

  const subtractBookPage = (array) =>
    array.reduce((previousValue, currentValue) => currentValue - previousValue);
  if (subtractBookPage(pobi) !== 1 || subtractBookPage(crong) !== 1) return -1;

  const isOddOrEven = (number) => (number % 2 === 0 ? "even" : "odd");

  if (
    isOddOrEven(leftPobiBookNumber) !== "odd" ||
    isOddOrEven(leftCrongBookNumber) !== "odd" ||
    isOddOrEven(rightPobiBookNumber) !== "even" ||
    isOddOrEven(rightCrongBookNumber) !== "even"
  )
    return -1;

  const compareSumAndMultiply = (array) => {
    const convertArray = [...String(array)].map(Number);
    const sum = convertArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    const multiply = convertArray.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
    return sum >= multiply ? sum : multiply;
  };

  const pobiValue =
    compareSumAndMultiply(leftPobiBookNumber) >
    compareSumAndMultiply(rightPobiBookNumber)
      ? compareSumAndMultiply(leftPobiBookNumber)
      : compareSumAndMultiply(rightPobiBookNumber);
  const crongValue =
    compareSumAndMultiply(leftCrongBookNumber) >
    compareSumAndMultiply(rightCrongBookNumber)
      ? compareSumAndMultiply(leftCrongBookNumber)
      : compareSumAndMultiply(rightCrongBookNumber);

  answer = pobiValue - crongValue;
  if (answer > 0) return 1;
  if (answer < 0) return 2;
  if (answer === 0) return 0;
}

module.exports = problem1;
