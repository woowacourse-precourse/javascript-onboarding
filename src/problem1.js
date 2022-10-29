function isValidPages(pages) {
  let leftPage = pages[0];
  let rightPage = pages[1];

  if (1 <= leftPage && leftPage <= 399 && leftPage + 1 == rightPage) {
    return (true);
  }
  return (false);
}

function problem1(pobi, crong) {
  var answer;

  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return -1;
  }
  return answer;
}

module.exports = problem1;
