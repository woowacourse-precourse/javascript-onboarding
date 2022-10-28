function problem5(money) {
  const answer = [];

  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let quo = money;

  for (let i = 0; i < won.length; i++) {
    answer.push(Math.floor(quo / won[i]));
    quo = Math.floor(money % won[i]);
  }

  return answer;
}

module.exports = problem5;

//expected: [1, 0, 0, 0, 0, 2, 0, 3, 7]
console.log(problem5(50237));
//expected: [0, 1, 1, 0, 0, 0, 0, 0, 0];
console.log(problem5(15000));
