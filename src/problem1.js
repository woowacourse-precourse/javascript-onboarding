function problem1(pobi, crong) {
  var answer;
  // let pobiScore=0, crongScore=0;

  // 잘못된 페이지인 경우 -1리턴
  if (!isRightPage(pobi) || !isRightPage(crong)) {
    return -1
  }

  // 각자의 점수 계산 함수

  // pobiScore와 crongScore를 비교하여 answer에 값을 넣고 리턴하기

  // if (pobiScore>crongScore) answer=1;
  // else if (pobiScore<crongScore) answer=2;
  // else answer=0;
  
  return answer;
}

function isRightPage(pages) {
  if (pages[1]-pages[0]!==1) {
    return 0;
  };
  if (pages[0]===1 || pages[1]===400) {
    return 0;
  };
}


console.log(problem1([97, 102],[197, 198]))



// module.exports = problem1;
