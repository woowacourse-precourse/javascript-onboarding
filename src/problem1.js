function problem1(pobi, crong) {
  var pobiadd = Add(pobi[1]);
  var crongadd = Add(crong[1]);
  var pobimulti = Multi(pobi[1]);
  var crongmulti = Multi(crong[1]);
  var pobichoose = pobiadd > pobimulti ? pobiadd : pobimulti; 
  var crongchoose = crongadd > crongmulti ? crongadd : crongmulti; 
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
function Multi(n){
  var sum = 1;
  do{
    sum *= n%10;
    n = Math.floor(n/10);
  }while(n > 0);
  return sum;
}
module.exports = problem1;
