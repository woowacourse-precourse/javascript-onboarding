function handleExceptions(pobi, crong) {
  const [pobi_left, pobi_right] = pobi;
  const [crong_left, crong_right] = crong;

  if (
    pobi_left % 2 !== 1 ||
    crong_left % 2 !== 1 ||
    pobi_right % 2 !== 0 ||
    crong_right % 2 !== 0
  ) {
    return false;
  }

  if (pobi_right - pobi_left !== 1 || crong_right - crong_left !== 1) {
    return false;
  }

  return true;
}

function problem1(pobi, crong) {
  if (!handleExceptions(pobi, crong)) {
    return -1;
  }

  var answer;
  return answer;
}

module.exports = problem1;
