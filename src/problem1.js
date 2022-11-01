function problem1(pobi, crong) {
  var answer = -1;
  //예외 처리
  if (pobi[1] - pobi[0] !== 1 || crong[1]-crong[0] !== 1) return answer

  function scoreChecker(ls){
    const score = [];
    ls.forEach(pNum => score.push(pageNumSlicer(String(pNum))));
    const finalScore = Math.max(...score);
    return finalScore
  }; 

  
  function pageNumSlicer(pNum){
    let plusResult = 0;
    let multipleResult = 1;
    [...pNum].forEach(n => {plusResult += n; multipleResult *= n})
    return plusResult,multipleResult
  };

  const pobiScore = scoreChecker(pobi);
  const crongScore = scoreChecker(crong);

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
