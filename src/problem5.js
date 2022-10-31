/* 기능 요구 사항
  money : 오만원, 만원, 오천원, 천원, 오백원, 백원, 오십원, 십원, 일원
          -> 각 몇개로 변환되는지 숫자로 표현
          -> 금액이 큰 순서대로 배열에 담음
          -> money는 1 이상 1,000,000 이하인 자연수이다.
  ex. 15000원 : 만원 (1), 오천원(2) --> [0, 1, 2, 0, 0, 0, 0, 0, 0]
*/

function problem5(money) {

  // 돈 단위 (지폐 / 동전)
  var unit = [ 50000, 10000, 5000, 1000, 500, 100, 50, 10, 1 ];
  
  // 변환 된 숫자를 담을 빈배열 생성
  var answer = new Array();

  // 제한 조건 걸기
  if(1 <= money && money <= 1000000){ // money는 1 이상 1,000,000 이하일때

    // unit 배열의 길이만큼 money를 나눠준다
    for(var i = 0; i<unit.length; i++){

      // money를 unit 배열의 순서대로 나누면 나오는 몫을 quotient에 저장한다
      var quotient = parseInt(money/unit[i]);   // money : 50237 일때, unit[0]은 50000으로 1이 나온다

      // 몫을 배열에 넣어준다
      answer.push(quotient);               // 몫인 1이 추가 

      // 잔금 계산
      var balance = money - (unit[i]*quotient); // 잔금으로 다시 저장.
      money = balance;  // 머니에 다시 덮어줌

    } // for문
      
  }else{ money=0;} // 그외의 조건이라면 머니는 0으로 설정

  return answer;
}

module.exports = problem5;
