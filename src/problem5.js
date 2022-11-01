function problem5(money) {
    const money_object = {
        50000: 0,
        10000: 0,
        5000: 0,
        1000: 0,
        500: 0,
        100: 0,
        50: 0,
        10: 0,
        1: 0,
    };

    for (let i of Object.keys(money_object).sort((a, b) => {
        return b - a;
    })) {
        if (money / i === 0) {
            money %= i;
        } else {
            money_object[i] = parseInt(money / i);
            money %= i;
        }
    }
    var answer = Object.values(money_object).reverse();
    return answer;
}

module.exports = problem5;
