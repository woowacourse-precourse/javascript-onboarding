function problem1(pobi, crong) {
  if (isExceptional(pobi) || isExceptional(crong)) return -1
  else if(getCalculate(pobi) > getCalculate(crong)) return 1
  else if (getCalculate(crong) > getCalculate(pobi)) return 2
  else if (getCalculate(crong) === getCalculate(pobi)) return 0
}

function isExceptional(pages){}

function getCalculate(pages){}


module.exports = problem1;