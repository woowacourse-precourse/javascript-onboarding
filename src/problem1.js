function problem1(pobi, crong) {
  let answer;
  if(checkException(pobi) === -1 || checkException(crong) === -1){
    return -1;
  }

  pobiMax =  maxValue( //pobi가 만들 수 있는 값 중 가장 큰 값 구하기
    maxValue(multiPage(pobi[0]), addPage(pobi[0])), //pobi의 왼쪽 페이지 각 자리수 곱, 합 비교하기
    maxValue(multiPage(pobi[1]), addPage(pobi[1]))); //pobi의 오른쪽 페이지 각 자리수 곱, 합 비교하기
  crongMax =  maxValue(//crong이 만들 수 있는 값 중 가장 큰 값 구하기
    maxValue(multiPage(crong[0]), addPage(crong[0])), //crong의 왼쪽 페이지 각 자리수 곱, 합 비교하기
    maxValue(multiPage(crong[1]), addPage(crong[1])));//crong의 오른쪽 페이지 각 자리수 곱, 합 비교하기

  if(pobiMax > crongMax){
    answer = 1;
  } else if(pobiMax < crongMax)
  {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}

function checkException(arr){ 
  if(arr.length !== 2){ 
    // 제한사항 1(각 배열의 길이는 2이다.)
    return -1;
  }
  if(arr[1]-arr[0] !=1){ 
    // 제한사항 2(각 배열에는 왼쪽 페이지 번호, 오른쪽 페이지 번호가 순서대로 들어있다.)
    return -1;
  }
  if(arr[0]<1|| arr[1]>400){ // 책의 페이지는 1에서 400 사이
    return -1;
  }
}

function multiPage(num){ //각 자리수 곱하기
  let mul = 1;
  while(parseInt(num/10) !==0){
    mul *= num%10;
    num = parseInt(num/10);
  }
  mul *= num;
  return mul;
}

function addPage(num){ //각 자리수 더하기
  let add = 0;
  while(parseInt(num/10) !==0){
    add += num%10;
    num = parseInt(num/10);
  }
  add += num;
  return add;
}

function maxValue(a, b){
  return a > b ? a : b;
}
module.exports = problem1;
