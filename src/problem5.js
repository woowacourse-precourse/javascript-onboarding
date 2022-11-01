// Greedy Algorithm
// Tries to find the optimal solution for each of the choices.

function problem5(money) {
  const allowances = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; // Initialization of all available allowances
  const answer = [];
  let i = 0; // Index initialization

  while (true) {
    /* 
      If money is bigger than allowance value,
      we record the number of coin that we need.
      Otherwise, we skip counting coins.
     */
    if (money >= allowances[i]) {
      let count = Math.floor(money / allowances[i]);
      answer[i] = count;
      money -= count * allowances[i];
    } else {
      answer[i] = 0;
    }

    i++; // Index increment for iteration

    // Disregarding unnecessary coins
    if (money === 0) {
      for (let j = 0; j < allowances.length - i; j++) {
        answer.push(0);
      }
      break;
    }
  }

  return answer;
}

module.exports = problem5;
