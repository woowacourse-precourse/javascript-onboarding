/*
*요구사항
1번 부터 주어진 숫자까지 369 게임을 실행.
총 몇번의 박수를 쳤는지 구하여라.
참고로, 각 숫자에서 3,6,9 숫자에 각각 한번씩 박수를 친다.


*해결전략
1번부터 숫자를 증가시키면서, 
각 문자의 369개수를 체크해주는 함수를 호출해 결과값을 더해나아가자.

*기능목록
1. 문자의 369 개수를 세어주는 함수. => cntNum function
*/

function problem3(number) {
  function cntNum(num) {
    let cutNum = String(num)
      .split("")
      .filter((str) => str === "3" || str === "6" || str === "9");
    return cutNum.length;
  }
  let cnt = 0;
  for (let i = 1; i <= number; i++) {
    cnt += cntNum(i);
  }
  return cnt;
}

module.exports = problem3;
