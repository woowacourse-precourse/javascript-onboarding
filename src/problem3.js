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
  const numberArray = makeArray(number);
  const answer = clap(numberArray);
  return answer;
}

module.exports = problem3;
