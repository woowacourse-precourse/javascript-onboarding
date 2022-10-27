/* 
1. 페이지가 연속적이지 않은 예외에 대한 처리
2. 각 자리수의 합, 곱을 계산
3. 계산된 값을 비교해서 큰 값을 추출
4. 포비와 크롱의 점수 비교
*/
function problem1(pobi, crong) {
  const pobiSub = pobi.reduce((prev, next) => next - prev);
  const crongSub = crong.reduce((prev, next) => next - prev);
  if ((pobiSub !== 1) | (crongSub !== 1)) {
    return -1;
  }
  var answer;
  return answer;
}

module.exports = problem1;
