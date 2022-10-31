function problem5(money) {
  var answer;
  let standard = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [];

  for(let i=0;i<standard.length;i++){
    result.push(parseInt(money/standard[i]));
    money %= standard[i];
  }
  return result
  return answer;
}

module.exports = problem5;
