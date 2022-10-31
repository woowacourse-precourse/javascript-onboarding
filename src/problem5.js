function problem5(money) {
  var answer = solution(money);
  return answer;
}
function solution(money) {
  let currency = [50000,10000,5000,1000,500,100,50,10,1];
  let counts = [];
  for(let i = 0; i < currency.length; i++) {
		let currCount = Math.floor(money / currency[i]);
    if(currCount !== 0) {
      counts.push(currCount);
      money -= currency[i] * currCount;
    } else {
      counts.push(0);
    }
  }
  return counts;
}
module.exports = problem5;