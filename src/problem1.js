function problem1(pobi, crong) {
  if (!isRightPage(pobi) || !isRightPage(crong)) return -1;  
  return winner(scoreCount(pobi),scoreCount(crong));
};

function isRightPage(pages) {
  if (pages[1]-pages[0]!==1) return false;
  if (pages[0]===1 || pages[1]===400) return false;
  return true;
};

function scoreCount(pages) {
  let finalScore=0;
  pages.forEach((page)=> {
    let addScore=0, mulScore=1;
    do {
      addScore+=page%10;
      mulScore*=page%10;
      page=Math.floor(page/10);
    } while(page>0);
    finalScore=Math.max(addScore,mulScore,finalScore);
  });
  return finalScore;
};

function winner(pobiScore,crongScore) {
  if (pobiScore>crongScore) return 1;
  if (pobiScore<crongScore) return 2;
  return 0;
};

module.exports = problem1;
