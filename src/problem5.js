function problem5(money) {
  const banknotes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];

  for (let i = 0; i < banknotes.length; i++) {
    answer.push(Math.floor(money / banknotes[i]));
    console.log(answer);

    money %= banknotes[i];
    console.log(money);
  }
  return answer;
}

problem5(50237);
module.exports = problem5;

// money	result
// 50237	[1, 0, 0, 0, 0, 2, 0, 3, 7]
// 15000	[0, 1, 1, 0, 0, 0, 0, 0, 0]
