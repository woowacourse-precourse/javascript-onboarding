function problem5(money) {
    const answer = Array.from({ length: 9 }, () => 0);
    const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    i = 0;

    while (money != 0) {
        answer[i] = parseInt(money / cash[i]);
        money %= cash[i];
        i++;
    }
    return answer;
}

module.exports = problem5;
