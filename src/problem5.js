function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  let idx = 0;
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(let item of arr){
    let count = 0;
    count = count + Math.floor(money/item);

    if(count > 0) {answer[idx] = count}

    money = money - item * Math.floor(money/item); // 남은 돈
    idx = idx + 1;
  }
  return answer;
}

module.exports = problem5;
