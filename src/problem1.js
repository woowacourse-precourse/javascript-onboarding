// 입력된 값의 유효성 체크
function validCheck(left, right){
  if(left % 2 !== 1 || right % 2 !== 0){
    return false;
  }
  if(right - left !== 1){
    return false;
  }
  if(left < 1 || right > 400){
    return false;
  }
  return true;
}

function calcScore(left, right){
  let leftSum = 0;
  let leftMul = 1;
  let rightSum = 0;
  let rightMul = 1;

  for(let i = left; i > 0; i = parseInt(i / 10)){
    leftSum += i%10;
    leftMul *= i%10;
  }
  for(let i = right; i > 0; i = parseInt(i / 10)){
    rightSum += i%10;
    rightMul *= i%10;
  }
  
  return Math.max(leftSum, leftMul, rightSum, rightMul);
}

function problem1(pobi, crong) {
  let answer;
  
  if(!(validCheck(pobi[0], pobi[1]) && validCheck(crong[0], crong[1]))){
    answer = -1;
    return answer;
  }
  const pobiScore = calcScore(pobi[0], pobi[1]);
  const crongScore = calcScore(crong[0], crong[1]); 
  answer = pobiScore > crongScore ? 1 : pobiScore === crongScore ? 0 : 2;

  return answer;
}

module.exports = problem1;
