// 해당 num에서 손뼉을 쳐야 하는 횟수
function count369(num){
  let cnt = 0;
  while(num){
    if(num % 10 == 3 || num % 10 == 6 || num % 10 == 9){
      cnt++;
    }
    num = ~~(num / 10)
  }
  return cnt
}
function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
