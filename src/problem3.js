function problem3(number) {
  return game369App(number);
}

function game369App(number){
  const arr = createNumberArr(number);
  return getCount369(arr);
}

module.exports = problem3;
