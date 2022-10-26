function checkContinousPage(pages) {
  if (pages[0] + 1 == pages[1]) {
    return true;
  }
  return false;
}

module.exports = problem1;
