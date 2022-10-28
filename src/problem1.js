/**페이지 결과 값 */
function findMax(a){
  let plus = 0;
  let mul = 1;
  let tmp;
  while(a>1){
    tmp = a%10;
    plus += tmp;
    mul *= tmp;
    a = (a-tmp)/10;
  }
  if(plus >= mul){
    return plus;
  }else{
    return mul;
  }
}
//** 에러 찾기*/
function findError(a){
  //홀수,짝수 페이지 맞을 때
  if(a[0]%2 == 0 || a[1]%2 == 1){
    return true;
  }
  //다른 장에 있는 페이지들일 때
  if(a[1]-a[0] != 1){
    return true;
  }

}
function problem1(pobi, crong) {
  var answer;
  var p,c;
  //에러 있으면 -1
  if(findError(pobi)||findError(crong)){
    answer = -1;
    return answer;
  }

  // pobi's max
  if(findMax(pobi[0])>findMax(pobi[1])){
    p = findMax(pobi[0]);
  }else{
    p = findMax(pobi[1]);
  }
  // crong's max
  if(findMax(crong[0])>findMax(crong[1])){
    c = findMax(crong[0]);
  }else{
    c = findMax(crong[1]);
  }

  if(p>c){
    answer = 1;
  }else if(p<c){
    answer = 2;
  }else{
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
