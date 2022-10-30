function problem5(money) {
    let answer = Array(9).fill(0);
    let balance = money;
    let quotient;
    let bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

    for (let i = 0; i < 9; i++) {
        quotient = Math.floor(balance / bills[i]);
        if (quotient > 0) {
            answer[i] = quotient;
            balance = balance % bills[i];
        }
    }
    return answer;
}
module.exports = problem5;
