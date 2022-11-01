function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let nums = i.toString().split("");
    for (let num of nums) {
      if (num === "3" || num === "6" || num === "9") {
        count++;
      }
    }
  }
  return count;
}
module.exports = problem3;
