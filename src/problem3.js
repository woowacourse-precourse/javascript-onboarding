function problem3(number) {
  const memorizeNumbers = memorizeNumber();
  var answer = memorizeNumbers[number];
  return answer;
}
function memorizeNumber() {
  let index = 0;
  const memorizeNumbers = new Array(10001).fill(0);
  for (index = 1; index < 10001; index++) {
    memorizeNumbers[index] = memorizeNumbers[index - 1] + countNumber(index);
  }
  return memorizeNumbers;
}
function countNumber(number) {
  const strArray = [...String(number)];
  let count = 0;
  strArray.forEach((char) => {
    if (char == "3" || char == "6" || char == "9") {
      count += 1;
    }
  });
  return count;
}
function checkValidation(number) {
  return checkIsNumber(number) && checkNumberRange(number);
}
function checkIsNumber(number) {
  if (typeof number == "number") return true;
  return false;
}
function checkNumberRange(number) {
  if (number >= 1 && number <= 10000) return true;
  return false;
}
module.exports = problem3;
