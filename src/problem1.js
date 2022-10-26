function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;
  if (!isSequenceNumber(pobi) || !isSequenceNumber(crong)) return -1;

  const pobiMaxNumber = getMaxNumber(pobi);
  const crongMaxNumber = getMaxNumber(crong);

  if (pobiMaxNumber > crongMaxNumber) return 1;
  else if (pobiMaxNumber < crongMaxNumber) return 2;
  else if (pobiMaxNumber === crongMaxNumber) return 0;
  else return -1;
}

function isValidPage(numbers) {
  if (numbers.indexOf(1) === -1 || numbers.indexOf(400) === -1) return true;
  return false;
}

function isSequenceNumber(numbers) {
  if (numbers.reduce((acc, cur) => Math.abs(acc - cur), 0) === 1) return true;
  return false;
}

function getMaxNumber(numbers) {
  let max = 0;
  numbers.forEach((number) => {
    const numberArr = number.toString().split("");
    const plus = numberArr.reduce((acc, cur) => acc + parseInt(cur), 0);
    const multi = numberArr.reduce((acc, cur) => acc * parseInt(cur), 1);
    max = Math.max(max, plus, multi);
  });
  return max;
}

module.exports = problem1;
