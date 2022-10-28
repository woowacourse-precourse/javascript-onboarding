function problem1(pobi, crong) {
  // calScore pobi 또는 crong 의 점수를 계산하는 함수
  // compare 두 점수를 비교하여 승자를 가르는 함수
  // 예외 처리 : (홀수,짝수)가 아닌 경우 / (p,p+1)이 아닌 경우 / p<=1 이거나 p>=399인 경우

  var answer;

  if(exception(pobi) || exception(crong)){
    answer = -1;
  }else{
    var pobiMax = calScore(pobi);
    var crongMax = calScore(crong);
    answer = compare(pobiMax, crongMax);
  }
  return answer;
}

function exception(pageNum){
  if(pageNum[0]%2==0 || pageNum[1]%2==1 ||
    pageNum[1]-pageNum[0]!=1 ||
    pageNum[0]<=1||pageNum[1]>=399){
    return true;
  }else{
    return false;
  }
}

function calScore(pageNum){
  var str1 = pageNum[0].toString().split("");
  var str2 = pageNum[1].toString().split("");
  var max1, max2;
  var sum=0, mul=1;
  for(var i=0; i<str1.length;i++){
    sum = sum + Number(str1[i]);
    mul = mul * Number(str1[i]);
  }
  max1 = (sum>mul) ? sum : mul;
  sum = 0; mul = 1;
  for(var i=0; i<str2.length;i++){
    sum = sum+Number(str2[i]);
    mul = mul*Number(str2[i]);
  }
  max2 = (sum>mul) ? sum : mul;

  return max1>max2 ? max1 : max2;
}

function compare(max1, max2){
  if(max1>max2){
    return 1;
  }else if(max1==max2){
    return 0;
  }else if(max1<max2){
    return 2;
  }
}

module.exports = problem1;
