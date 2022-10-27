//pro 1번의 메인 로직을 담당하는 메인 메소드 problem1. (각각 조건에 맞게 -1, 0, 1, 2 값을 반환 시켜준다)
function problem1(pobi, crong) {
  if (isExceptional(pobi) || isExceptional(crong)) return -1
  else if(getCalculate(pobi) > getCalculate(crong)) return 1
  else if (getCalculate(crong) > getCalculate(pobi)) return 2
  else if (getCalculate(crong) === getCalculate(pobi)) return 0
}

//올바르지 않은 인풋 값들에 대한 예외 처리를 해주는 함수.
function isExceptional(pages){
  const isFirstOrLast = pages[0] <= 1 || pages[1] >= 400
  const isFitOddandEven = pages[0] % 2 !== 1 || pages[1] % 2 !== 0
  const isFitPageOrder = pages[0] + 1 !== pages[1]
  const isRightPageForm = pages.length !== 2

  if(isFirstOrLast || isFitOddandEven || isFitPageOrder || isRightPageForm) return true
}

//인풋 값의 각 자릿수를 모두 더한 값 vs 모두 곱한 값 중에서 가장 큰 값을 찾아주는 함수.
function getCalculate(pages){
  let biggest = 0;

  pages.forEach((currentPage) => {
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

module.exports = problem1;