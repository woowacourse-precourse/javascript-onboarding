function problem5(money) {
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10 , 1];
  let answer = [];

  while(money > 0) {
    for(let i=0; i<arr.length; i++) {
      answer.push(Math.floor(money / arr[i]));
      money = money % arr[i];
    }
  }

  return answer;
}

module.exports = problem5;
