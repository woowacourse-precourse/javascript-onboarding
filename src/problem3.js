function problem3(number) {
  let clap = 0;
  for (let i = 1; i <= number; i++) {
    const arr = String(i).match(/[3|6|9]/g);
    console.log(arr);
    if (arr) {
      clap += arr.length;
    }
  }
  return clap;
}

// 1 2 3 4 5 6 7 8 9 10 11 12 13
// 0 0 1 1 1 2 2 2 3 3 3 3 3
// console.log(problem3(33));
module.exports = problem3;
