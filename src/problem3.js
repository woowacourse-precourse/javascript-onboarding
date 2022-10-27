function problem3(number) {
  var answer;

  let i = 1;
  let clap = 0;

  while (i <= number) {
    let arr = i.toString().split("");
    arr.map((num) => {
      if (num === "3" || num === "6" || num === "9") {
        clap++;
      }
    });
    i++;
  }

  answer = clap;

  return answer;
}

module.exports = problem3;
