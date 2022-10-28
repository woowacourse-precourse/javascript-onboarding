function problem1(pobi, crong) {
  var answer = checkValidation(pobi, crong) ? getWinner(pobi, crong) : -1;
  return answer;
}
function sumDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
function multiplyDigits(number) {
  let multiple = 1;
  while (number > 0) {
    multiple *= number % 10;
    number = Math.floor(number / 10);
  }
  return multiple;
}
function compareNumber(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}
function getWinner(pobi, crong) {
  const pobiMax = compareNumber(sumDigits(pobi[0], multiplyDigits(pobi[1])));
  const crongMax = compareNumber(sumDigits(crong[0], multiplyDigits(crong[1])));
  if (pobiMax == crongMax) return 0;
  else if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else return -1;
}
function checkValidation(Array1, Array2) {
  const continuous = checkContinuous(Array1) && checkContinuous(Array2);
  const range = checkRange(Array1) && checkRange(Array2);
  const sniffling = checkSniffling(Array1) && checkSniffling(Array2);
  if (continuous && range && sniffling) {
    return true;
  }
  return false;
}
function checkContinuous(Array) {
  if (Array[0] + 1 == Array[1]) return true;
  else return false;
}
function checkRange(Array) {
  let check = false;
  Array.forEach((num) => {
    if (num >= 1 && num <= 400) check = true;
  });
  return check;
}
function checkSniffling(Array) {
  if (Array[0] % 2 == 1 && Array[1] % 2 == 0) return true;
  else return false;
}
module.exports = problem1;
