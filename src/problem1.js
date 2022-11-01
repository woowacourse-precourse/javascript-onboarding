function getMaxScore(number){
  let numArr = (number+"").split("");
  let addScore = numArr.map(ele => Number(ele))
                      .reduce((acc,cur) =>acc+cur);
  let mulScore = numArr.reduce((acc,cur) => acc*cur);

  return addScore>mulScore ? addScore : mulScore;
}
function problem1(pobi, crong) {
  if(pobi[1]-pobi[0] !== 1 || crong[1]-crong[0] !== 1) return -1;  

  let pobiLeftScore = getMaxScore(pobi[0]);
  let pobiRightScore = getMaxScore(pobi[1]);
  let pobiScore = pobiLeftScore > pobiRightScore ? pobiLeftScore : pobiRightScore;

  let crongLeftScore = getMaxScore(crong[0]);
  let crongRightScore = getMaxScore(crong[1]);
  let crongScore = crongLeftScore>crongRightScore ? crongLeftScore : crongRightScore;


  if(pobiScore>crongScore) return 1;
  else if(crongScore>pobiScore) return 2;
  else return 0;

}

module.exports = problem1;
