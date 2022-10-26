const isValidPages = (pages) => {
  if ((pages[0] <= 1) || (pages[1] >= 400) || (pages[0] + 1 !== pages[1])) {
    return false;
  }

  return true;
};

function problem1(pobi, crong) {
  if (!(isValidPages(pobi) && isValidPages(crong))) {
    return -1;
  }
}

module.exports = problem1;
