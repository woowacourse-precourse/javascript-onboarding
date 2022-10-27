function problem3(number) {
  var answer = 0;

  // 3, 6, 9 확인
  const check = (str) => {
    if (str == 3 || str == 6 || str == 9) {
      return 1;
    } else {
      return 0;
    }
  }

  // 1부터 number까지
  for (let num = 1; num <= number; num++) {
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
      let count = check(str[i]);
      answer += count;
    }
  }

  return answer;
}

module.exports = problem3;
