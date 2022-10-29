function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let nums = String(i).split("");

    for (let j = 0; j < nums.length; j++) {
      if (
        nums[j].includes("3") ||
        nums[j].includes("6") ||
        nums[j].includes("9")
      ) {
        answer++;
      }
    }
  }

  return;
}

module.exports = problem3;
