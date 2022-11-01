function problem3(number) {
  var answer;
  var cnt = 0;

  for (i = 1; i <= number; i++) 
    cnt += divideNumTo10(i, 0);

  answer = cnt;
  return answer;
}

function divideNumTo10(number, cnt) {
  while (number > 0) {
    remainNum = number % 10;
    cnt += is_369(remainNum);
    number = parseInt(number / 10);
  }
  return cnt;
}

function is_369(remainNum) {
  if (remainNum == 3 || remainNum == 6 || remainNum == 9) return 1;
  return 0;
}

module.exports = problem3;

/*
1. 매개변수를 한 자리씩 끊어서 전달하는 함수(divideNumTo10)
1. 매개변수가 3, 6, 9인지 판별하는 함수 구현(numCheck)
2. 3, 6, 9에 해당될 경우 cnt++
3. 1, 2의 함수를 이용하여 number의 모든 자릿수 판별
4. for문을 통해 1~number의 값 판별함수 실행
5. 최종 cnt값 반환
*/