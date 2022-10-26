function problem1(pobi, crong) {
  var pobiadd = Add(pobi[1]);
  var crongadd = Add(crong[1]);
  var answer;
  return answer;
}
function Add(n){
  var sum = 0;
  do{
    sum += n%10;
    n = Math.floor(n/10);
  }while(n > 0);

  return sum;
}

module.exports = problem1;
