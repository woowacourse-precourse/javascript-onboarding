function problem3(number) {
  var clap = 0;
  for (let i = 1; i <= number; i++) {
      let split_nums = i.toString().split("");
      for (let num of split_nums) {
          if (num === "3" || num === "6" || num === "9") {
            clap++;
          }
      }
  }
  return clap;
}

module.exports = problem3;
