function problem1(pobi, crong) {
  var answer;
  return answer;
}

function sumNum(num) {
  var sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

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