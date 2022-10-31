function problem3(number) {
  function get369ofNum(num) {
    let result = 0;

    while (num > 0) {
      result += [3, 6, 9].includes(num % 10);
      num = Math.floor(num / 10);
    }
    return result;
  }

  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += get369ofNum(i);
  }
  return answer;
}

module.exports = problem3;
