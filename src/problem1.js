function add(input){
  let addResult=0;
  for(num of input.toString()){
    addResult+=parseInt(num);
  }
  return addResult;
}

function mul(input){
  let mulResult=1;
  for(num of input.toString()){
    mulResult*=parseInt(num);
  }
  return mulResult;
}

function problem1(pobi, crong) {
  let answer;
  // pobi와 crong 각각의 값 구하기
  let pobiMax = Math.max(add(pobi[0]), mul(pobi[1]));
  let crongMax = Math.max(add(crong[0]), mul(crong[1]));
  // 점수 계산
  if(pobiMax > crongMax) { answer = 1 }
  else if(pobiMax < crongMax) { answer = 2 }
  else if(pobiMax == crongMax) { answer = 0 };

  return answer;
}

module.exports = problem1;
