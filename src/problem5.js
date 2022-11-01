function problem5(money) {
  var answer;
  let arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = [];
  for(let i = 0 ; i < arr.length; i++){
    answer.push(~~(money / arr[i]));
    money %= arr[i];
  }
  return answer;
}
module.exports = problem5;
