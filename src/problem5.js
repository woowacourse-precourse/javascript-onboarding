function problem5(money) {
  const dic = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  for (let i = 0; i < dic.length; i++) {
    if (money >= dic[i]) {
      answer.push(Math.floor(money / dic[i]));
      money = money % dic[i];
    } else answer.push(0);
  }
  return answer;
}
module.exports = problem5;
