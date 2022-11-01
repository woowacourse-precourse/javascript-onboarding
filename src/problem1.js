function problem1(pobi, crong) {
  const pobiLeftPage = pobi[0];
  const pobiRightPage = pobi[1];
  const crongLeftPage = crong[0];
  const crongRightPage = crong[1];

  if(pobiLeftPage >= pobiRightPage || crongLeftPage >= crongRightPage) return -1;
  if(pobiRightPage-pobiLeftPage != 1 || crongRightPage-crongLeftPage != 1) return -1;
  if(pobiLeftPage==1 || pobiLeftPage==399 || crongLeftPage==1 || crongLeftPage == 399) return -1;

  const pobiScore = getScore(pobiLeftPage, pobiRightPage);
  const crongScore = getScore(crongLeftPage, crongRightPage);

  if(pobiScore == crongScore) return 0;
  else if(pobiScore > crongScore) return 1;
  else return 2;
}

function getScore(leftPage, rightPage){
  let sum = 0;
  let mul = 1;

  const eachDigitArray = Array.from(String(leftPage)+String(rightPage));
  for (const eachDigit of eachDigitArray){
    sum += Number(eachDigit);
    mul *= Number(eachDigit);
  }
  
  return sum > mul ? sum : mul;
}

module.exports = problem1;
