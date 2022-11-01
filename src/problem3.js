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
  let count = 0;
  for (let i = 1; i <= number; i++) {
    count += countTargetNums(i);
  }

  return count;
}

module.exports = problem3;
