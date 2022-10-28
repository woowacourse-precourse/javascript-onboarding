function problem3(number) {
  let totalClap = 0;
  for (let current = 1; current < number + 1; current++) {
    totalClap += getClap(current);
  }
  return totalClap;
}

function getClap(current) {
  let clap = 0;
  current.toString().split('').forEach((char) => {
    clap += '369'.includes(char);
  })
  return clap;
}

module.exports = problem3;
