function problem5(money) {
  const regex = /^[0-9]/g;
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let m = money;

  //제한사항 처리
  if (m > 100000) {
    return (answer = "올바른 값을 입력하십시오.");
  } else if (!regex.test(m)) {
    return (answer = "자연수를 입력하십시오.");
  }

  for (let i = 0; m > 0; i++) {
    if (m / 50000 >= 1) {
      answer[0]++;
      m -= 50000;
    } else if (m / 10000 >= 1) {
      answer[1]++;
      m -= 10000;
    } else if (m / 5000 >= 1) {
      answer[2]++;
      m -= 5000;
    } else if (m / 1000 >= 1) {
      answer[3]++;
      m -= 1000;
    } else if (m / 500 >= 1) {
      answer[4]++;
      m -= 500;
    } else if (m / 100 >= 1) {
      answer[5]++;
      m -= 100;
    } else if (m / 50 >= 1) {
      answer[6]++;
      m -= 50;
    } else if (m / 10 >= 1) {
      answer[7]++;
      m -= 10;
    } else if (m / 1 >= 1) {
      answer[8]++;
      m -= 1;
    }
  }

  return answer;
}

module.exports = problem5;
