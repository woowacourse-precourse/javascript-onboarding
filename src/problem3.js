const targetNums = [3, 6, 9];

const countTargetNums = (num) => {
  let count = 0;
  num = num + "";
  num.split("").forEach((item) => {
    if (targetNums.includes(Number(item))) count++;
  });

  return count;
};

function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += countTargetNums(i);
  }

  return answer;
}

module.exports = problem3;
