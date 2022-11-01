function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const nums = i.toString().split("").map(Number);

    nums.forEach((num) => {
      if (num === "3" || num === "6" || num === "9") {
        answer++;
      }
    });
  }
}

module.exports = problem3;
