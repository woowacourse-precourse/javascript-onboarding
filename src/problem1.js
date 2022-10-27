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

  const getMax = (pages) => {
    const max = pages.map((page) => {
      const temp = String(page).split("");
      const plus = temp.reduce((acc, cur) => acc + parseInt(cur), 0);
      const multi = temp.reduce((acc, cur) => acc * parseInt(cur), 1);

      return Math.max(plus, multi);
    });

    return Math.max(...max);
  };

  const maxPobi = getMax(pobi);
  const maxCrong = getMax(crong);

  if (maxPobi > maxCrong) {
    answer = 1;
  } else if (maxPobi < maxCrong) {
    answer = 2;
  } else {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
