function problem1(pobi, crong) {
  if (!isRightPage(pobi) || !isRightPage(crong)) return -1;
  let pobiScore=scoreCount(pobi);
  let crongScore=scoreCount(crong);
  let answer=(pobiScore>crongScore) ? 1 : ((pobiScore<crongScore) ? 2 : 0);
  return answer;
};

function isRightPage(pages) {
  if (pages[1]-pages[0]!==1) return 0;
  if (pages[0]===1 || pages[1]===400) return 0;
  return 1;
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
}

module.exports = problem1;
