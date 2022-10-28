console.log(problem3(13));

function problem3(number) {
  return game369App(number);
}

function game369App(number){
  const eachNumbersArr = createNumberArr(number);
  return getCount369(eachNumbersArr);
}

function createNumberArr(number){
  return Array.from({length: number}, (_,idx)=>idx+1);
}

module.exports = problem3;
