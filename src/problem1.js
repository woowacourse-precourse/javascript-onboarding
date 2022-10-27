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

  //crong 점수 계산
  let crongSum = 0;
  let crongMulti = 0;
  for (var page of crong){
    let tmpSum = 0;
    let tmpMulti = 1;
    const newArray = Array.from(String(page));
    for (var i of newArray){
      tmpSum += Number(i);
      crongMulti *= Number(i);
    }
    if(crongSum < tmpSum){
      crongSum = tmpSum;
    }
    if(crongMulti < tmpMulti){
      crongMulti = tmpMulti;
    }
  }

  let crongMax = (crongSum > crongMulti) ? crongSum : crongMulti;

  if(pobiMax == crongMax){
    answer = 0
  }
  else if(pobiMax > crongMax){
    answer = 1
  }
  else{
    answer = 2
  }

  return answer;
}

module.exports = problem1;
