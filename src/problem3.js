function problem3(number) {
  let answer = 0;

  for (let i = 1; i < number + 1; i++) {
    const num = i.toString().split('');

    num.forEach((n) => {
      if (n.includes(3)) {
        answer++;
      }
      if (n.includes(6)) {
        answer++;
      }
      if (n.includes(9)) {
        answer++;
      }
    });
  }

  return answer;
}

module.exports = problem3;
