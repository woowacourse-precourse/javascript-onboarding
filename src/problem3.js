/*
기능 목록
1. 숫자를 문자로 변환시키는 기능
2. 3, 6, 9 개수를 반환하는 기능
*/

const CHECK_3 = 3;
const CHECK_6 = 6;
const CHECK_9 = 9;

function string(num) {
  return String(num);
}

function count369(str) {
  var count = 0;

  for (let i = 0; i < str.length; i++) {

    if (str[i] == CHECK_3 || str[i] == CHECK_6 || str[i] == CHECK_9) {
      count += 1;
    }

  }

  return count;
}

function problem3(number) {
  var answer = 0;
  var value;

  for (let val = 1; val <= number; val++) {
    value = string(val);
    answer += count369(value);
  }

  return answer;
}

module.exports = problem3;