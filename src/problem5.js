function problem5(money) {
  var answer = solution(money);
  return answer;
};
function solution(money) {
  let currency = [50000,10000,5000,1000,500,100,50,10,1];
  let count = [];
  let withdraw = 1;
  for(let i = 0; i < currency.length; i++) {
    if(Math.floor(money / currency[i] !== 0)) {
      count.push(Math.floor(money / currency[i]))
      money -= withdraw * (currency[i] * Math.floor(money / currency[i]))
    } else {
      count.push(0)
    }
  };
  return count
};
module.exports = problem5;
