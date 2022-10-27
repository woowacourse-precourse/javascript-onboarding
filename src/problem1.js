function problem1(pobi, crong) {
  if (isExceptional(pobi) || isExceptional(crong)) return -1
  else if(getCalculate(pobi) > getCalculate(crong)) return 1
  else if (getCalculate(crong) > getCalculate(pobi)) return 2
  else if (getCalculate(crong) === getCalculate(pobi)) return 0
}

function isExceptional(pages){
  const isFirstOrLast = pages[0] >= 399 || pages[1] <= 2
  const isFitOddandEven = pages[0] % 2 !== 1 || pages[1] % 2 !== 0
  const isFitPageOrder = pages[0] + 1 !== pages[1] 

  if(isFirstOrLast || isFitOddandEven || isFitPageOrder) return true
}

function getCalculate(pages){}


console.log(problem1([99, 102], [211, 212]))

module.exports = problem1;