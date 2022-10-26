function problem1(pobi, crong) {
  var pobiadd = pobi[1]%10 == 0 ? Add(pobi[0]) : Add(pobi[1]);
  var crongadd = crong[1]%10 == 0 ? Add(crong[0]) : Add(crong[1]);
  var pobimulti = pobi[1]%10 == 0 ? Multi(pobi[0]) : Multi(pobi[1]);
  var crongmulti = crong[1]%10 == 0 ? Multi(crong[0]) : Multi(crong[1]);
  var pobichoose = pobiadd > pobimulti ? pobiadd : pobimulti; 
  var crongchoose = crongadd > crongmulti ? crongadd : crongmulti; 
  var answer;
  if (Exception(pobi, crong) == false){
    answer = -1
  }
  else if (pobichoose > crongchoose){
    answer = 1
  }
  else if (pobichoose < crongchoose){
    answer = 2
  }
  else if (pobichoose == crongchoose){
    answer = 0
  }
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
function Exception(pobi, crong){
  if (pobi[1]-pobi[0] != 1){
    return false
  }
  else if (crong[1]-crong[0] != 1){
    return false
  }
  else if (pobi[0] == 1 || pobi[1] == 400 || crong[0]==1 || crong[1] == 400){
    return false
  }
  else{
    return true
  }
}
module.exports = problem1;
