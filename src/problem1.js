function problem1(pobi, crong) {
  var answer;

  pobiLeftScore = pobiCrongLeft(pobi);
  crongLeftScore = pobiCrongLeft(crong);
  pobiRightScore = pobiCrongRight(pobi);
  crongRightScore = pobiCrongRight(crong);

  pobiScore = bestScore(pobiLeftScore, pobiRightScore);
  crongScore = bestScore(crongLeftScore, crongRightScore);

  return answer;
}

function pobiCrongLeft(pobiCrong){
  left = pobiCrong[0].toString(); //ex)pobi[0] => 정수형 97, toString => 문자형 97
  leftSum = 0;  //전역변수
  leftMul = 1;  //전역변수
  
  for(let i = 0; i < left.length; i++){
    leftSum += parseInt(left[i]); //parseInt => 문자형을 정수형으로 변환
  }
  for(let i = 0; i < left.length; i++){
    leftMul += parseInt(left[i]); //parseInt => 문자형을 정수형으로 변환
  }
  if(leftSum > leftMul){
    return leftSum;
  } else {
    return leftMul;
  }
}

function pobiCrongRight(pobiCrong){
  Right = pobiCrong[1].toString();  //ex)pobi[1] => 정수형 98, toString => 문자형 98
  RightSum = 0;  //전역변수
  RightMul = 1;  //전역변수
  for (let i = 0; i < Right.length; i++){
    RightSum += parseInt(Right[i]) //parseInt => 문자형을 정수형으로 변환
  }
  for (let i = 0; i < Right.length; i++){
    RightMul *= parseInt(Right[i]) //parseInt => 문자형을 정수형으로 변환
  }
  if(RightSum > RightMul){
    return RightSum;
  } else {
    return RightMul;
  }
}

function bestScore(leftScore, rightScore){
  if(leftScore < rightScore){
    return rightScore;
  } else {
    return leftScore;
  }
}

module.exports = problem1;
