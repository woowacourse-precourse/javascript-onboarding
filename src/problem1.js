function problem1(pobi, crong) {
  if (checkProblem(pobi) || checkProblem(crong)) {
    return -1;
  }

  const pobiMaxNumber = getMaxNumber(pobi[0], pobi[1]);
  const crongMaxNumber = getMaxNumber(crong[0], crong[1]);

  if (pobiMaxNumber === crongMaxNumber) return 0;
  else if (pobiMaxNumber > crongMaxNumber) return 1;
  else if (pobiMaxNumber < crongMaxNumber) return 2;
}
function checkProblem(numbers) {
  if (numbers.length !== 2) return true;
  if (numbers[0] + 1 !== numbers[1]) return true;
  if (numbers[0] < 1 || numbers[0] > 400) return true;
  if (numbers[1] < 1 || numbers[1] > 400) return true;

  return false;
}
function getMaxNumber(oddNumber, evenNumber) {
  return Math.max(
    sumNumber(oddNumber),
    multiNumber(oddNumber),
    sumNumber(evenNumber),
    multiNumber(evenNumber)
  );
}

function sumNumber(number) {
  let sum = 0;
  number
    .toString()
    .split("")
    .map((num) => (sum += Number(num)));

  return sum;
}
function multiNumber(number) {
  let multi = 1;
  number
    .toString()
    .split("")
    .map((num) => (multi *= Number(num)));

  return multi;
}

module.exports = problem1;
