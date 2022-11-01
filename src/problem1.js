/*
 #기능 요구 사항
포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때, 
포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return 하도록 solution 메서드를 완성.

1. 왼쪽 페이지와 오른쪽 페이지의 각 자리 숫자를 더하고 곱한 수를 구한다.
2. 각 자리 숫자의 합과 곱 중에서 가장 큰수를 구한다.
3. 크롱과 포비의 점수를 비교한다. 

*/

function problem1(pobi, crong) {
  
  let answer;
  answer  = solution(pobi,crong);
  return answer;
}

/*왼쪽 페이지와 오른쪽 페이지의 각 자리 숫자를 더하고 곱한 수를 구한다.*/
function calculate(leftPageNumber, rightPageNumber) {

  const EXCEPTION = -1;

  if(leftPageNumber +1 != rightPageNumber) {
    return EXCEPTION;
  }

  let leftPageNumber_ = String(leftPageNumber);
  let rightPageNumber_ = String(rightPageNumber);

  let leftSum = 0;
  let rightSum = 0;
  let leftMul = 1;
  let rightMul = 1;

  for(let i = 0; i < leftPageNumber_.length; i++) {
      leftSum += parseInt(leftPageNumber_[i]);
      leftMul *= parseInt(leftPageNumber_[i]);
  };

  for(let i = 0; i < rightPageNumber_.length; i++) {
      rightSum += parseInt(rightPageNumber_[i]);
      rightMul *= parseInt(rightPageNumber_[i]);
  };

  const max = findMax(leftSum, rightSum,leftMul,rightMul);

  return max;
}





module.exports = problem1;
