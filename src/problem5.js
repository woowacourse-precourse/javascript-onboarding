function problem5(money) {
  let answer;
  answer = withdraw(money);
  return answer;
}

function withdraw(money) {
  let price = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0] //순서대로 5만, 만, 5천, 천, 5백, 백, 5십, 십, 1
  let index = 0;

  while(money !== 0) {
    if(money >= price[index]) {
       money -= price[index];
       count[index]++;
    }else {
      index++;
    }
  }

  return count;
}

module.exports = problem5;
