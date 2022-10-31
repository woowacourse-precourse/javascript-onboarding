const threeSixNineReg = /[3|6|9]/g;

function problem3(number) {
  return threeSixNineMatch(number);
}

function threeSixNineMatch(number) {
  return number.toString().match(threeSixNineReg);
}

module.exports = problem3;
