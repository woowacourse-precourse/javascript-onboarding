/* 기능 목록
* 1. pobi와 crong의 페이지 번호 각 자리 숫자를 모두 곱한 값, 더한 값을 배열 pobi_num, crong_num에 저장
* 2. pobi_num과 crong_num에서 큰 수 찾기
* 3. pobi와 crong의 큰 수를 비교, 결과 출력
* 4. 코드 정리
*/

function problem1(pobi, crong) {
  var answer;
  var pobi_num = [];
  var crong_num = [];

  for (const item of pobi){
    var arr = item.toString().split("").map(x=> parseInt(x));
    pobi_num.push(arr.reduce((x,y)=> x+y));
    pobi_num.push(arr.reduce((x,y)=> x*y));
  }

  for(const item of crong){
    var arr = item.toString().split("").map(x=> parseInt(x));
    crong_num.push(arr.reduce((x,y)=> x+y));
    crong_num.push(arr.reduce((x,y)=> x*y));
  }

  return answer;
}

module.exports = problem1;
