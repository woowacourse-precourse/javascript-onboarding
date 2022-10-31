function problem5(money) {
    let answer = Array(9).fill(0);

    let quotient;
    let bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

    for (let i = 0; i < 9; i++) {
        quotient = Math.floor(money / bills[i]);
        if (quotient > 0) {
            answer[i] = quotient;
            money = money % bills[i];
        }
    }

    return answer;
}

module.exports = problem5;
