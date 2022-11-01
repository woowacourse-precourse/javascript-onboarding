function problem1(pobi, crong) {
  // 예외사항 체크
  if(! IsPagesOk(pobi) || ! IsPagesOk(crong)){
    return -1
  }
  
  // 숫자비교
  if(getMaxNum(pobi) > getMaxNum(crong)){
    return 1
  }
  else if(getMaxNum(pobi) < getMaxNum(crong)){
    return 2
  }
  else {
    return 0
  }
}

// 예외 체크
function IsPagesOk(page){
  if(page.length != 2){
    return false
  }
  if(!(Number.isInteger(page[0]) && Number.isInteger(page[1]))){
    return false
  }
  if(page[0] % 2 != 1 || page[1] % 2 != 0){
    return false
  }
  if(page[1] - page[0] != 1){
    return false
  }
  if(page[0] < 2 || page[1] < 2){
    return false
  } 
  if(page[0] > 398 || page[1] > 399){
    return false
  }

  return true
}

// 각 페이지에서 구할 수 있는 최대 값
function getMaxNum(page){
  let maxLeft = Math.max(sumAllNum(page[0]), multiAllNum(page[0]))
  let maxRight = Math.max(sumAllNum(page[1]), multiAllNum(page[1]))

  return Math.max(maxLeft, maxRight)
}

// 각 자릿수의 합
function sumAllNum(num){
  let numbers_arr = [...num.toString()].map(x => Number(x))
  let rstVal = numbers_arr.reduce(function add(sum, currentValue){
    return sum + currentValue
  }, 0)
  return rstVal
}

// 각 자릿수의 곱
function multiAllNum(num){
  let numbers_arr = [...num.toString()].map(x => Number(x))
  let rstVal = numbers_arr.reduce(function add(multi, currentValue){
    return multi * currentValue
  }, 1)
  return rstVal
}


module.exports = problem1;