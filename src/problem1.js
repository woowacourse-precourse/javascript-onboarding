
function checkArr(arr) {
  left = Number(arr[0]);
  right = Number(arr[1]);
  if (left % 2 != 1 || left < 3 || left > 397)
    return (0);
  if (left + 1 !== right)
    return (0);
  return (1);
}

function problem1(pobi, crong) {
  if (!checkArr(pobi) || !checkArr(crong))
    return -1;
  let pobiMax = getMax(pobi);
  let crongMax = getMax(crong);
  var answer;
  answer = (pobiMax > crongMax ? 1 : 2);
  if (pobiMax == crongMax)  answer = 0;
  return answer;
}


module.exports = problem1;

/* 
예외처리
1. 시작면과 마지막면 포함하면 안됨 3 <= left <= 397
2. left == 홀수
3. left + 1 == right

구현
1. pobiMax와 crongMax값을 비교하고 리턴하는 메인 함수
2. 예외처리 함수
3. 페이지의 각 자리의 숫자를 모두 더하는 함수, 곱하는 함수
4. 3번 값들을 비교해서 Max를 리턴하는 함수
 */