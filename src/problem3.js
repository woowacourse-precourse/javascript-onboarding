console.log(problem3(33));

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
  return numberArr.join("").split("").filter((number) => ['3','6','9'].includes(number)).length;
}

module.exports = problem3;
