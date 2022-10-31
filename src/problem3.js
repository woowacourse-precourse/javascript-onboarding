function problem3(number) {
  var answer = 0;

  const is369 = (num) => {
    if (num == 3 || num == 6 || num == 9) {
      return 1;
    }
    return 0;
  };

  const clap_cnt_of_num = (num) => {
    if (num < 10) {
      return is369(num);
    }
    return is369(num % 10) + clap_cnt_of_num(parseInt(num / 10));
  };

  for (let num = 1; num <= number; num++) {
    answer += clap_cnt_of_num(num);
  }
  return answer;
}

module.exports = problem3;
