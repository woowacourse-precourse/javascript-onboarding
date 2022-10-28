function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;
  let pobiScore = getBiggestNumber(pobi);
  let crongScore = getBiggestNumber(crong);

  console.log("pobiScore : ", pobiScore, " crongScore : ", crongScore);
  var answer = compareScore(pobiScore, crongScore);

  console.log(answer);
  return answer;
}

const getBiggestNumber = ([leftPage, rightPage]) => {
  console.log(leftPage, rightPage);
  let biggerPage = rightPage;
  let sumPage = 0,
    mulPage = 1;

  if (rightPage % 10 === 0) biggerPage = leftPage;

  while (biggerPage > 0) {
    let n = Math.floor(biggerPage % 10);
    sumPage += n;
    mulPage *= n;
    biggerPage = Math.floor(biggerPage / 10);
  }

  console.log(sumPage, mulPage);

  return sumPage < mulPage ? mulPage : sumPage;
};

const compareScore = (score1, score2) => {
  if (score1 > score2) return 1;
  else if (score1 === score2) return 0;
  return 2;
};

const isValidPage = ([leftPage, rightPage]) => {
  if (leftPage + 1 !== rightPage || leftPage < 1 || rightPage > 400)
    return false;
  return true;
};

module.exports = problem1;
