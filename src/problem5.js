/* 기능목록
* 1. 금액 배열 만들기
* 2. money를 배열 요소대로 나누기
* 3. 몫은 result 배열에 추가, 나머지는 money에 대입하기
* 4. 결과 배열 출력
* 5. 코드 정리
*/

function problem5(money) {
  var result = [];
  const moneyArr = [50000,10000,5000,1000,500,100,50,10,1];
  for (const i of moneyArr){
    result.push(parseInt(money/i));
    money = money%i;
  }
}

module.exports = problem5;
