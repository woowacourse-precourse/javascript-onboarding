function problem3(number) {
  var answer;
  let clap = 0;
  num = [];

  for (let i = 1; i < number + 1; i++) {
    num.push(`${i}`);
  }
  for (n of num) {
    clap +=
      n.split("3").length - 1 ||
      n.split("6").length - 1 ||
      n.split("9").length - 1;
    // console.log(clap);
    // if (n.includes("3") || n.includes("6") || n.includes("9")) {
    //   clap += 1;
    // }
    // if (n.length > 1) {

    // }
    // console.log(n, clap);
  }
  answer = clap;
  return answer;
}

// problem3(13);
console.log(problem3(33));
module.exports = problem3;
