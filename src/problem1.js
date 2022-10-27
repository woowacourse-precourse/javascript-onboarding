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

function getCalculate(pages){
  let biggest = 0;

  pages.map((currentPage) => {
    if(currentPage >= 100) {
      const units = (currentPage % 100) % 10
      const tens = parseInt((currentPage % 100)/10)
      const hundreds = parseInt(currentPage / 100)
      const sum = units + tens + hundreds;
      const mul = units * tens * hundreds;

      biggest = Math.max(sum, mul, biggest);
    } else {
      const units = currentPage % 10
      const tens = parseInt(currentPage / 10)
      const sum = units + tens;
      const mul = units * tens;

      biggest = Math.max(sum, mul, biggest);
    }
  })
  return biggest;
}


console.log(problem1([99, 102], [211, 212]))
console.log(problem1([99, 100], [99, 100]))
console.log(problem1([77, 78], [277, 278]))
console.log(problem1([77, 78], [177, 178]))

module.exports = problem1;