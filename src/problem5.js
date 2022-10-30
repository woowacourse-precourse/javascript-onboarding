function problem5(money) {
  var answer = [];
  arr = [50000,10000,5000,1000,500,100,50,10,1];

  for (i in arr){
    answer.push(parseInt(money/arr[i]));
    money %= arr[i];
  }
  return answer;
}
module.exports = problem5;
