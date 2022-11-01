function check369(num) {
  return num === 3 || num === 6 || num === 9 ? true : false;
}

function count369(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, cur) => (check369(parseInt(cur)) ? (acc += 1) : acc), 0);
}

function problem3(number) {
  return Array(number)
    .fill()
    .reduce((acc, _, i) => (acc += count369(i + 1)), 0);
}

module.exports = problem3;
