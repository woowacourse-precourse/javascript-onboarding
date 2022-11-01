function problem3(number) {
  var answer = countClap(number);

  return answer;
}

const countClap = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let num = i;
    while (num > 0) {
      let n = Math.floor(num % 10);
      if (n === 3 || n === 6 || n === 9) count++;
      num = Math.floor(num / 10);
    }
  }
  return count;
};

module.exports = problem3;
