/* 기능 목록
* 1. pobi와 crong의 페이지 번호 각 자리 숫자를 모두 곱한 값, 더한 값을 배열 pobi_num, crong_num에 저장
* 2. 예외 사항 처리
* 3. pobi_num과 crong_num에서 큰 수 찾기
* 4. pobi와 crong의 큰 수를 비교, 결과 출력
* 5. 코드 정리
*/


function problem1(pobi, crong) {
  var pobi_num = [];
  var crong_num = [];

  if (pobi.length !=2 || crong.length != 2){
    return -1;
  }else if(pobi.includes(0) || crong.includes(0)){
    return -1;
  }else if(pobi[0]%2 != 1 || crong[0]%2 != 1 || pobi[1]%2 != 0 || crong[1]%2 != 0){
    return -1;
  }else if(pobi[1]-pobi[0] != 1|| crong[1]-crong[0] != 1){
    return -1;
  }
    
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

  const pobi_maxNum = Math.max(...pobi_num);
  const crong_maxNum = Math.max(...crong_num);

  if (pobi_maxNum > crong_maxNum){
    return 1;
  }else if (pobi_maxNum < crong_maxNum){
    return 2;
  }else{
    return 0;
  }
}

module.exports = problem1;
