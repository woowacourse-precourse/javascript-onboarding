function errorHandling(number) {
  if (number < 1 || number > 10000) return false;
  if (!Number.isInteger(number)) return false;
  return true;
}
function makeArray(number) {
  const arr = new Array(number).fill().map((_, index) => String(index + 1));
  return arr;
}
function clap(numberArray) {
  let result = 0;
  numberArray.forEach((item) => {
    for (v of item) {
      if (v === "3") result += 1;
      if (v === "6") result += 1;
      if (v === "9") result += 1;
    }
  });
  return result;
}

function problem3(number) {
  if (!errorHandling(number)) return -1;
  const numberArray = makeArray(number);
  const answer = clap(numberArray);
  return answer;
}

module.exports = problem3;
