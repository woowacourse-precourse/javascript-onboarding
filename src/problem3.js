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

  function count369(s) {
    for (let letter of s) {
      const translatedNum = parseInt(letter);
      if (
        (translatedNum === 3) |
        (translatedNum === 6) |
        (translatedNum === 9)
      ) {
        clap += 1;
      }
    }
  }

  const arr = find369(number);

  return clap;
}

module.exports = problem3;
