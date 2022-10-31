// < 기능 목록 >
// 1. 1부터 number까지 손뼉을 몇 번 쳐야 하는지 구한다.
//    [예외처리] 한번에 박수를 여러번 쳐야하는 경우 -> 각 자릿수 숫자 중에서 3의 배수가 몇 개 있는지를 구한다.
//    [예외처리] 3으로 나누어 떨어지는 수 중 0은 제외

function problem3(number) {
  if(number <= 0) return 0;
  else {
    var n = number;
    var answer = 0;
    while(n > 0) {
      if(n % 10 != 0 && (n % 10) % 3 == 0) answer++; // 박수
      n = Math.floor(n/10); // 소수점 버림
    }
    return answer + problem3(number-1); // number 박수 횟수 + 1 ~ (number-1)까지의 박수 횟수
  }
}

module.exports = problem3;
