function problem3(number) {
  return game369App(number);
}

function game369App(number) {
  const eachNumbersArr = createNumberArr(number);
  return getCount369(eachNumbersArr);
}

function createNumberArr(number) {
  return Array.from({ length: number }, (_, idx) => idx + 1);
}

function getCount369(numberArr) {
  let numberChaining = numberArr.join("");
  return numberChaining.split("").filter((number) => number == 3 || number == 6 || number == 9).length;
}

module.exports = problem3;
