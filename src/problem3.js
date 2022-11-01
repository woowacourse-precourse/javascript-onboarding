function problem3(number) {
  var numStr = "";

  for (let i = 1; i <= number; i++) {
    numStr = `${i + numStr}`;
  }

  return numStr.split(/3|6|9/g).length - 1;
}

module.exports = problem3;
