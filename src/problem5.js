function problem5(money) {
  var answer;
  var result=[];
  var value;

  result[0]=parseInt(money/50000);
  value=money%50000;

  result[1]=parseInt(value/10000);
  value=value%10000;

  result[2]=parseInt(value/5000);
  value=value%5000;

  result[3]=parseInt(value/1000);
  value=value%1000;

  result[4]=parseInt(value/500);
  value=value%500;

  result[5]=parseInt(value/100);
  value=value%100;

  result[6]=parseInt(value/50);
  value=value%50;

  result[7]=parseInt(value/10);
  value=value%10;

  result[8]=parseInt(value/1);
 
  answer=result;
  return answer;
}

module.exports = problem5;
