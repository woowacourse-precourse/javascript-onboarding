function problem3(number) {
  // 결과를 담을 배열 선언
  const result = [];

  // 반복문을 통해 숫자를 순회
  for (let i = 1; i <= number; i++) {
    // 예외사항 - 두자리수 이상일 때
    if (String(i).length >= 2) {
      String(i).split("").map(e => {
        if (e.match(/[3|6|9]/g)) {
          result.push(i);
        }
      })
    } else { // 한 자릿수일 때
      if (String(i).match(/[3|6|9]/g)) {
        result.push(String(i))
      }
    }
  }
  // 결과로 배열의 길이 반환
  return result.length
}

module.exports = problem3;
