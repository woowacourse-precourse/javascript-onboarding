function problem3(number) {
  return cntClap(number);
}

function cntClap(number) {
  // number까지 박수 몇번 치는지에 대한 함수.
  let cnt = 0;

  for (let i = 0; i <= number; i++) {
    let current_num = i;

    while (current_num > 0) {
      if (check369(current_num)) {
        cnt += 1;
      }
      current_num = Math.floor(current_num / 10);
    }
  }

  return cnt;
}

function check369(number) {
  // 해당하는 숫자의 나머지가 3, 6, 9이면 true를 return
  if (number % 10 == 3 || number % 10 == 6 || number % 10 == 9) return true;
  return false;
}

module.exports = problem3;
