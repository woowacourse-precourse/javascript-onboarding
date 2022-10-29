function find369(number) {
  const regexp = /3|6|9/;
  let found369 = [];

  for (let n = 1; n < number + 1; n++) {
    if (regexp.test(n)) {
      found369.push(n);
    }
  }

  return found369;
}

function problem3(number) {
  let clap = 0;
  return clap;
}

module.exports = problem3;
