function problem3(number) {
  let answer;

  let nums = [];
  for (let i = 1; i < number + 1; i++) {
    nums = [...nums, ...i.toString().split("")];
  }

  answer = nums.filter(
    (item) => item === "3" || item === "6" || item === "9"
  ).length;

  return answer;
}

module.exports = problem3;
