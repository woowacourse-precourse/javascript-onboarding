function validCheck(left, right){
  if(left % 2 !== 1 || right % 2 !== 0){
    return false
  }
  if(right - left !== 1){
    return false
  }
  return true
}


function problem1(pobi, crong) {
  var answer;
  
  if(!(validCheck(pobi[0], pobi[1]) && validCheck(crong[0], crong[1]))){
    answer = -1
    return answer
  }

  // 계산 후 answer 정하는 함수

  return answer;
}

module.exports = problem1;
