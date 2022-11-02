function problem5(money) {
  var answer = [];

  let array = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

  for (let i = 0; i < array.length; i++){
    let temp = money / array[i]
    let integer = Math.floor(temp)
    answer.push(integer);
    money %= array[i];
}
  return answer;
}

module.exports = problem5;
