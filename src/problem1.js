function problem1(pobi, crong) {
  var answer;

  const checkException = (pages) => {
    if (pages[0] < 1 || pages[0] > 400 || pages[1] < 1 || pages[1] > 400) {
      return true;
    }
    if (Math.abs(pages[0] - pages[1]) !== 1) {
      return true;
    }
    return false;
  };

  if (checkException(pobi) || checkException(crong)) {
    return -1;
  }

  return answer;
}

module.exports = problem1;
