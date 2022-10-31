function problem3(number) {
  return cntClap(number);
}

function cntClap(number) {
  // number까지 박수 몇번 치는지에 대한 함수.
  let cnt = 0;

  for (let i = 0; i <= number; i++) {
    let current_num = i;

    while (current_num > 0) {
      if (
        current_num % 10 == 3 ||
        current_num % 10 == 6 ||
        current_num % 10 == 9
      ) {
        cnt += 1;
      }
      current_num = Math.floor(current_num / 10);
    }
  }

  return cnt;
}

module.exports = problem3;
