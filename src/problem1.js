function problem1(pobi, crong) {
  let answer;

  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return (answer = -1);
  }

  return answer;
}
const isValidPages = (pages) => {
  if (pages[1] - pages[0] != 1) {
    return false;
  } else if (pages[0] <= 1 || pages[1] >= 400) {
    return false;
  } else {
    return true;
  }
};

module.exports = problem1;
