const THREE_SIX_NINE = [3, 6, 9];

function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const nums = String(i).split("");
    nums.forEach((num) => {
      if (THREE_SIX_NINE.includes(Number(num))) answer++;
    });
  }

  return answer;
}

module.exports = problem3;
