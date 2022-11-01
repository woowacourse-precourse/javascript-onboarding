function problem3(number) {
  return [...Array(number)].map((x, i) => i + 1).join('').match(/3|6|9/g).length;
}

module.exports = problem3;
