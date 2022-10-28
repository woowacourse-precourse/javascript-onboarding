

function problem1(pobi, crong) {
  var answer;
  var pobiNumber;
  var crongNumber;
  pobiNumber = representN(numberSum(pobi[0]),numberMulti(pobi[1]));
  crongNumber = representN(numberSum(crong[0]),numberMulti(crong[1]));

  if(pobi[1]!=pobi[0]+1||crong[1]!=crong[0]+1){
    answer = -1;
  }

  else if(pobiNumber>crongNumber){
    answer=1;
  }
  else if(pobiNumber<crongNumber){
    answer=2;
  }
  else{answer=0}

  return answer;
}

function numberSum(a) {
  var answer = 0;
  var sumNumber = String(a);

  for(var i=0; i<sumNumber.length; i++){
    answer +=parseInt(sumNumber[i]);
  }
  return answer;
}

function numberMulti(b){
  var answer =1;
  var multiNumber = String(b);

  for(var i=0; i<multiNumber.length; i++){
    answer *=parseInt(multiNumber[i]);
  }
  return answer;
}

function representN(a,b){
  var answer;
  if (a>b){answer=a;}
  else{answer=b;}
  return answer;
}



module.exports = problem1;
