function problem3(number) {
  let clap = 0;
  let total = 0;

  for (let i = 0; i < number + 1; i++) {
    const inum = i.toString().split("");

    for (iel of inum) {
      if (iel % 3 === 0 && iel > 0) {
        clap += 1;
      }
    }
  }
  total += clap;
  return total;
}

module.exports = problem3;
