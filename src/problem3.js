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
  var answer;
  return answer;
}

module.exports = problem3;
