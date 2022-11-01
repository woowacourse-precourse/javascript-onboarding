function problem1(pobi, crong) {
  var answer;

  //예외case
  if (isPageInvalid(pobi, crong)) return -1;

  // **수정사항 : sum, multiple값을 저장할 pobiRslt, crongRslt 배열 필요없음(삭제함), Math.max시 바로 값 대입
  //총 4개의 값 중 최댓값을 구하고 저장
  const pobiMax = Math.max(sumNum(pobi[0]), multipleNum(pobi[0]), sumNum(pobi[1]), multipleNum(pobi[1]))
  const crongMax = Math.max(sumNum(crong[0]), multipleNum(crong[0]), sumNum(crong[1]), multipleNum(crong[1]))

  //pobiMax, crongMax 비교
  if (pobiMax > crongMax) answer = 1        //포비 승
  else if (crongMax > pobiMax) answer = 2   //크롱 승
  else if (pobiMax == crongMax) answer = 0  //무승부

  return answer;
}

//예외처리
function isPageInvalid(pobi, crong) {
  if (pobi[0] <= 1 || crong[0] <= 1) return true;                         //맨 첫 페이지 또는 0 이하의 값 입력시
  if (pobi[1] >= 400 || crong[1] >= 400) return true;                     //맨 끝 페이지 또는 400 이상의 값 입력시
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) return true;    //펼친 페이지 값이 연속되지 않을 때, EX) 5, 9
  
  return false;
}

//자릿수의 합을 구하는 함수
function sumNum(num) {
  var sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

//자릿수의 곱을 구하는 함수
function multipleNum(num) {
  var rslt = 1;
  while (num > 0) {
    rslt *= num % 10;
    num = parseInt(num / 10);
  }
  return rslt;
}

module.exports = problem1;


/*
1. 더한 값을 리턴할 함수
2. 곱한 값을 리턴할 함수
3. 1, 2의 결과를 pobiRslt, crongRslt 배열에 저장
4. 더한값, 곱한값을 비교하여 가장 큰 수를 변수에 저장
5. 포비와 크롱의 max값 비교
6. 결과 출력 1/2/0/-1
*/