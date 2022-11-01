function problem3(number) {
  var answer = 0;
  let n = number;
  if (n > 10000) return (answer = "10000 이하의 숫자를 기입해주세요.");
  for (let i = 1; i <= n; i++) {
    let count = i;
    while (count != 0) {
      if (count % 10 == 3 || count % 10 == 6 || count % 10 == 9) {
        answer++;
      }
      count /= 10; //3 또는 6 또는 9가 십의 자리 백의 자리에 들어가는 예외 사항 처리
      count = Math.floor(count);
    }
  }

  return answer;
}

module.exports = problem3;
