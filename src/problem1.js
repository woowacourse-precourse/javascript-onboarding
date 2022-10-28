function problem1(pobi, crong) {
  var answer;
  let pobiScore=0, crongScore=0;

  // 잘못된 페이지인 경우 -1리턴
  if (pobi[1]-pobi[0]!==1 || crong[1]-crong[0]!==1) {
    return -1;
  };
  if (pobi[0]===1 ||crong[0]===1 ||pobi[1]===400||crong[0]===400) {
    return -1;
  };

  // pobi의 점수
  pobi.forEach((page)=> {
    let addScore=0, mulScore=1;
    do {
      addScore+=page%10;
      mulScore*=page%10;
      page=Math.floor(page/10);
    } while(page>0);
    pobiScore=Math.max(addScore,mulScore,pobiScore);
  });

  // crong의 점수
  crong.forEach((page)=> {
    let addScore=0, mulScore=1;
    do {
      addScore+=page%10;
      mulScore*=page%10;
      page=Math.floor(page/10);
    } while(page>0);
    crongScore=Math.max(addScore,mulScore,crongScore);
  });

  // pobiScore와 crongScore를 비교하여 answer에 값을 넣고 리턴하기
  if (pobiScore>crongScore) answer=1;
  else if (pobiScore<crongScore) answer=2;
  else answer=0;
  
  return answer;
}

module.exports = problem1;
