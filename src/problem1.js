function problem1(pobi, crong) {
  if(pobi[1] !== pobi[0] + 1 || crong[1] !== crong[0] + 1) return -1;
  let pobiScore = getScore(pobi);
  let crongScore = getScore(crong);
}

function getScore(pages) {
  let score = 0;
  pages.forEach(page => {
    page = ('' + page).split('');
    let multiplyAll = page.reduce((pre,cur) => +pre * +cur);
    let plusAll = page.reduce((pre,cur) => +pre + +cur);
    if(score < multiplyAll) score = multiplyAll;
    if(score < plusAll) score = plusAll;
  });
  return score;
}

module.exports = problem1;
