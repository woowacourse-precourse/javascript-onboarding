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
  var answer;
  return answer;
}

module.exports = problem3;
