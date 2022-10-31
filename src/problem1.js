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

function isValid(arr){
  // 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수, 왼쪽페이지와 오른쪽 페이지는 차이가 1, 1페이지와 400페이지는 포함하지 않는다.
  if(arr[0]%2!=1 || arr[1]%2!=0 || arr[1]-arr[0]!=1 || arr[0]>arr[1] || arr[0]==1 || arr[1]==400) return false;
  return true;
}

function problem1(pobi, crong) {
  let answer;
  // pobi와 crong 각각의 값 구하기
  let pobiMax = Math.max(add(pobi[0]), mul(pobi[1]));
  let crongMax = Math.max(add(crong[0]), mul(crong[1]));
  // 점수 계산
  if(isValid(pobi) && isValid(crong)){
    if(pobiMax > crongMax) { answer = 1 }
    else if(pobiMax < crongMax) { answer = 2 }
    else if(pobiMax == crongMax) { answer = 0 };
  }
  else answer = -1;
  return answer;
}

module.exports = problem1;
