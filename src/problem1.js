function problem1(pobi, crong) {
  var answer;

  //pobi 점수 계산
  let pobiSum = 0;
  let pobiMulti = 0;
  for (var page of pobi){
    let tmpSum = 0;
    let tmpMulti = 1;
    const newArray = Array.from(String(page));
    for (var i of newArray){
      tmpSum += Number(i);
      pobiMulti *= Number(i);
    }
    if(pobiSum < tmpSum){
      pobiSum = tmpSum;
    }
    if(pobiMulti < tmpMulti){
      pobiMulti = tmpMulti;
    }
  }
  
  let pobiMax = (pobiSum > pobiMulti) ? pobiSum : pobiMulti;

  return answer;
}

module.exports = problem1;
