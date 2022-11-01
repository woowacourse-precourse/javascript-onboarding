function problem3(number) {
  let clap = 0;

  if (number < 0 || 10000 < number) {
  }

  for (let i = 1; i <= number; i++) {
    clap += getClapCount(i);
  }

  return clap;
}

function getClapCount(number) {
  let count = 0;

  number
    .toString()
    .split("")
    .map((value) => {
      if (["3", "6", "9"].includes(value)) {
        count++;
      }
    });

  return count;
}

module.exports = problem3;
