const THREESIXNINE_REG = /[3|6|9]/g;

function problem3(number) {
  let clapsNumber = 0;
  for (let i = 1; i <= number; i++) {
    if (threeSixNineMatch(i) != null) {
      clapsNumber += threeSixNineMatch(i).length;
    }
  }
  return clapsNumber;
}

function threeSixNineMatch(number) {
  return number.toString().match(THREESIXNINE_REG);
}

module.exports = problem3;
