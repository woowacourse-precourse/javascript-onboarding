function problem1(pobi, crong) {

  // 예외처리
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  // 점수처리
  pobiScore = Math.max(MaxScore(pobi[0]), MaxScore(pobi[1]));
  crongScore = Math.max(MaxScore(crong[0]), MaxScore(crong[1]));

  if (pobiScore > crongScore)  return 1;
  else if (pobiScore < crongScore) return 2;
  else if (pobiScore == crongScore)  return 0;
  else return -1; 
}


function MaxScore(page) {
  var maxPages = String(page).split('').map(Number);

  Sum = 0;
  Mul = 1;

  maxPages.forEach(maxPage => {
    Sum += maxPage;
    Mul *= maxPage;
  });

  return Math.max(Sum, Mul);
}

module.exports = problem1;
