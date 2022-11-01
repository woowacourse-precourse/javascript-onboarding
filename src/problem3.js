const MIN_NUM = 1;
const MAX_NUM = 10000;
function problem3(number) {
  if (!checkValidation(number)) throw new Error("입력오류입니다.");
  const memorizeNumbers = memorizeNumber();
  var answer = memorizeNumbers[number];
  return answer;
}
function memorizeNumber() {
  let index = 0;
  const memorizeNumbers = new Array(MAX_NUM + 1).fill(0);
  for (index = MIN_NUM; index <= MAX_NUM; index++) {
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
  return (
    checkIsNumber(number) &&
    checkNumberRange(number) &&
    checkIsNaturalNumber(number)
  );
}
function checkIsNumber(number) {
  if (typeof number == "number") return true;
  return false;
}
function checkNumberRange(number) {
  if (number >= MIN_NUM && number <= MAX_NUM) return true;
  return false;
}
function checkIsNaturalNumber(number) {
  return Math.floor(number) == number;
}
module.exports = problem3;
