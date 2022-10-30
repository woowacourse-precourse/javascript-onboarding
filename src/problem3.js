const problem3 = (number) => {
  let answer = 0;

  Array.from({ length: number }).forEach((_, i) => {
    const matchResult = `${i + 1}`.match(/3|6|9/g);

    if (matchResult) answer += matchResult.length;
  });

  return answer;
};

module.exports = problem3;
