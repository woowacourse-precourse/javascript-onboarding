function problem1(pobi, crong) {
  if (!isRightPage(pobi) || !isRightPage(crong)) return -1;  
  return winner(scoreCount(pobi),scoreCount(crong));
};

function isRightPage(pages) {
  let leftPage=pages[0], rightPage=pages[1];
  if (rightPage-leftPage!==1) return false;
  if (leftPage===1 || rightPage===400) return false;
  return true;
};

function scoreCount(pages) {
  let finalScore=0;
  pages.forEach((eachPage)=> {
    let addScore=0, mulScore=1;
    do {
      addScore+=eachPage%10;
      mulScore*=eachPage%10;
      eachPage=Math.floor(eachPage/10);
    } while(eachPage>0);
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
