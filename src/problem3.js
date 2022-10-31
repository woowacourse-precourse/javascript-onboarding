/* 3,6,9 게임에서 박수치는 횟수 구하기
   13 -> 3,6,9,13 --- 총 4번 
   33 -> 3,6,9,13,16,19,23,26,29,30,31,32,33 ---> 14번
        (33은 3이 두번 들어가니 2회로 쳐야함 )
  
  [제한사항]
  - number는 1 이상 10,000 이하인 자연수이다.
*/

function problem3(number) {

  // 문자형일 경우 숫자형으로 변환
  var num = Number(number);

  // 빈 배열 생성
  var game = new Array();

  // 입력된 숫자가 1~1000이내인 자연수일때
  if( 1 <= num && num <= 1000 ){
    // for문으로 입력된 숫자까지 순서대로 배열에 추가해줌.
    for(var i=1; i<=num; i++){
      game.push(i); // 1부터 number 까지
    }
  }
  
  // 3,6,9 숫자 개수 확인
  var answer = game.toString().split('').filter(n => ['3', '6', '9'].includes(n)).length;
            // toString() : 숫자 -> 문자화
            // split : 문자열 분할
            // filter : 요소 중 특정 조건을 만족하는 요소를 모으고 배열을 만듬
            // includes() : 특정값이 포함되어있는지 확인 여부를 함
            // 위의 3,6,9가 들어간 배열의 length를 출력 => 박수 횟수
  return answer;

}

module.exports = problem3;
