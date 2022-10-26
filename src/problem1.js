function problem1(pobi, crong) {
  var answer;

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const pobiLeftPageArray = splitNumber(pobiLeftPage);
  const pobiRightPageArray = splitNumber(pobiRightPage);
  const crongLeftPageArray = splitNumber(crongLeftPage);
  const crongRightPageArray = splitNumber(crongRightPage);

  return answer;
}

function splitNumber(page) {
  return page.toString().split('');
}

module.exports = problem1;
