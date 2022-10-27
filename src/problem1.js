function problem1(pobi, crong) {
  var answer;

  //예외사항
  if(pobi[0] >= pobi[1] || crong[0] >= crong[1]){ //왼쪽 >= 오른쪽인 경우
    answer = -1;
    return answer;
  }
  else if(pobi[1]-pobi[0] != 1 || crong[1]-crong[0] != 1){ //페이지의 차이가 1이 아닌 경우
    answer = -1;
    return answer;
  }
  else if(pobi[0]==1 || pobi[0]==399 || crong[0]==1 || crong[0] == 399){ //시작 또는 마지막 면이 나온 경우
    answer = -1;
    return answer;
  }

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
