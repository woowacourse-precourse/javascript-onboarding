function problem3(number) {
  return game369App(number);
}

function game369App(number) {
  return getCount369(createNumberArr(number));
}

function createNumberArr(number) {
  return Array.from({ length: number }, (_, idx) => idx + 1).join("").split("");
}

function getCount369(numberArr) {
  return numberArr.filter(number => ['3','6','9'].includes(number)).length;
}

module.exports = problem3;
