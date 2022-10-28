function problem1(pobi, crong) {
  var answer;

  // 잘못된 페이지인 경우 -1리턴
  if (!isRightPage(pobi) || !isRightPage(crong)) {
    return -1
  }

  // 각자의 점수 계산 함수
  pobiScore=scoreCount(pobi)
  crongScore=scoreCount(crong)

  // pobiScore와 crongScore를 비교하여 answer에 값을 넣고 리턴하기
  if (pobiScore>crongScore) answer=1;
  else if (pobiScore<crongScore) answer=2;
  else answer=0;
  
  return answer;
}

function isRightPage(pages) {
  if (pages[1]-pages[0]!==1) return 0;
  if (pages[0]===1 || pages[1]===400) return 0;
  return 1
}

function scoreCount(pages) {
  finalScore=0
  pages.forEach((page)=> {
    let addScore=0, mulScore=1;
    do {
      addScore+=page%10;
      mulScore*=page%10;
      page=Math.floor(page/10);
    } while(page>0);
    finalScore=Math.max(addScore,mulScore,finalScore);
  });
  return finalScore
}

console.log(problem1([131, 132],[211, 212]))



// module.exports = problem1;
