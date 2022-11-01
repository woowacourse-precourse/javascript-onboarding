function convert(money){
  var ret = [];
  var bills = [50000,10000,5000,1000,500,100,50,10,1];
  for(var i=0; i<9; i++){
    var num = Math.floor(money/bills[i]);
    money %= bills[i];
    ret.push(num);
  }
  return ret;
}
function problem5(money) {
  var answer;
  //기능목록1: 돈 변환
  answer = convert(money);
  console.log(answer);
  return answer;
}
module.exports = problem5;
