function problem5(money) {
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10];

    const change = [];
    for (let i = 0; money !== 0; i++) {

        const count = money / coins[i] >= 1 ? Math.floor(money/coins[i]) : 0 ;
        change[i] = {
            value: coins[i],
            count: count
        }

        money = count > 0 ? money -= coins[i] * count : money;
    }

    return change;
}
console.log(problem5(50237));
module.exports = problem5;
