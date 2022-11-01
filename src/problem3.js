function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const numStr = i.toString();
    answer = answer + numStr.split(/3|6|9/).length - 1;
  }

  return answer;
}

console.log(problem3(33))

module.exports = problem3;
