/* 기능 목록
* 1. 1부터 number까지 반복하여 숫자를 배열로 변환
* 2. 배열에 3,6,9가 있으면 count
* 3. 결과 출력
* 4. 코드 정리
*/

function problem3(number) {
  var count = 0;
  for(var i = 1; i<= number; i++){
    var numArr = i.toString().split("");
    count += numArr.filter(num => '3' === num || '6' === num || '9'===num).length;
  }
}

module.exports = problem3;
