function problem1(pobi, crong) {
  let answer;
  if(isVaild(pobi, crong) === false) return -1;
  let pobiScore = getScore(pobi);
  let crongScore = getScore(crong);
  answer = decideWinner(pobiScore, crongScore);
  return answer;
}

function isVaild(pobi, crong) {  
  if(pobi[1] !== pobi[0] + 1 || crong[1] !== crong[0] + 1) return false;
  if(pobi[0] % 2 === 0 || crong[0] % 2 === 0) return false;
  if(pobi[0] > 398 || crong[0] > 398 || pobi[0] < 2 || crong[0] < 2) return false;
  return true;
}

function decideWinner(pobiScore, crongScore) {  
  if(pobiScore > crongScore) return 1;
  if(pobiScore < crongScore) return 2;
  if(pobiScore === crongScore) return 0;
}

function getScore(pages) {
  let score = 0;
  pages.forEach(page => {
    page = ('' + page).split('');
    let multiplyAll = page.reduce((pre,cur) => +pre * +cur);
    let plusAll = page.reduce((pre,cur) => +pre + +cur);
    if(score <= multiplyAll) score = multiplyAll;
    if(score < plusAll) score = plusAll;
  });
  return score;
}

module.exports = problem1;
