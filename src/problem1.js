function validCheck(left, right){
  if(left % 2 !== 1 || right % 2 !== 0){
    return false
  }
  if(right - left !== 1){
    return false
  }
  return true
}

function calcScore(left, right){
  leftSum = 0
  leftMul = 1
  rightSum = 0
  rightMul = 1

  for(let i = left; i > 0; i = parseInt(i / 10)){
    leftSum += i%10
    leftMul *= i%10
  }
  for(let i = right; i > 0; i = parseInt(i / 10)){
    rightSum += i%10
    rightMul *= i%10
  }
  
  return Math.max(leftSum, leftMul, rightSum, rightMul);
}

function problem1(pobi, crong) {
  var answer;
  
  if(!(validCheck(pobi[0], pobi[1]) && validCheck(crong[0], crong[1]))){
    answer = -1
    return answer
  }
  pobiScore = calcScore(pobi[0], pobi[1])
  crongScore = calcScore(crong[0], crong[1]) 
  answer = pobiScore > crongScore ? 1 : pobiScore === crongScore ? 0 : 2

  return answer;
}

module.exports = problem1;
