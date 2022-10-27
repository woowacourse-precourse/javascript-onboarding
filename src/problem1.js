function isValidInput(pageArr){
  if(
    checkArrLength(pageArr) 
    && checkPageRange(pageArr) 
    && checkPageNum(pageArr)
    ){
    return true;
  }  
}

function checkArrLength(pageArr){
  if(pageArr.length==2){
    return true;
  }
}

function checkPageRange(pageArr){
  const [left, right] = pageArr;
  if(left >= 1 && right <= 400){
    return true;
  }
}

function checkPageNum(pageArr){
  const [left, right] = pageArr;
  if(left + 1 == right && left%2 == 1 && right%2 == 0){
    return true;
  }
}

function problem1(pobi, crong) {
  var answer;
  if(!isValidInput(pobi) || !isValidInput(crong)){
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
