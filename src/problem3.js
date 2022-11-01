function problem3(number) {
  var answer;
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let nums = i.toString().split("");
    for (num of nums) {
      if (num == "3") {
        count++;
      } else if (num == "6") {
        count++;
      } else if (num == "9") {
        count++;
      }
    }
  }
  return count;
}

module.exports = problem3;
