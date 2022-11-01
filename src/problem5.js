function problem5(money) {
  var answer = [];
  if(money/50000 >= 1) {
    answer.push(Math.floor(money/50000));
    money -= 50000*Math.floor(money/50000);
  } else {answer.push(0)}
  if(money/10000 >= 1) {
    answer.push(Math.floor(money/10000));
    money -= 10000*Math.floor(money/10000);
  } else {answer.push(0)}
  if(money/5000 >= 1) {
    answer.push(Math.floor(money/5000));
    money -= 5000*Math.floor(money/5000);
  } else {answer.push(0)}
  if(money/1000 >= 1) {
    answer.push(Math.floor(money/1000));
    money -= 1000*Math.floor(money/1000);
  } else {answer.push(0)}
  if(money/500 >= 1) {
    answer.push(Math.floor(money/500));
    money -= 500*Math.floor(money/500);
  } else {answer.push(0)}
  if(money/100 >= 1) {
    answer.push(Math.floor(money/100));
    money -= 100*Math.floor(money/100);
  } else {answer.push(0)}
  if(money/50 >= 1) {
    answer.push(Math.floor(money/50));
    money -= 50*Math.floor(money/50);
  } else {answer.push(0)}
  if(money/10 >= 1) {
    answer.push(Math.floor(money/10));
    money -= 10*Math.floor(money/10);
  } else {answer.push(0)}
  if(money >= 1) {
    answer.push(money);
  } else {answer.push(0)}
  return answer;
}

module.exports = problem5;
