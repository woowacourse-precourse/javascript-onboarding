function problem3(number) {
  let clap = 0;

  for (let i = 1; i <= number; i++) {
    clap += countClap(i);
  }

  return clap;
}

function countClap(number) {
  let count = 0;
  number
    .toString()
    .split("")
    .map((num) => {
      if (["3", "6", "9"].includes(num)) count += 1;
    });

  return count;
}

module.exports = problem3;
