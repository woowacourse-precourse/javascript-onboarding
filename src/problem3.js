function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const nums = i.toString().split("").map(Number);

    nums.map((v) => {
      if (v === 3 || v === 6 || v === 9) answer++;
    });
  }

  return answer;
}

module.exports = problem3;
