function problem5(money) {
    const fiftyHundredCount = (money - (money % 50000)) / 50000;
    money = money - 50000 * fiftyHundredCount;

    const tenHundredCount = (money - (money % 10000)) / 10000;
    money = money - 10000 * tenHundredCount;

    const fiveHundredCount = (money - (money % 5000)) / 5000;
    money = money - 5000 * fiveHundredCount;

    const oneHundredCount = (money - (money % 1000)) / 1000;
    money = money - 1000 * oneHundredCount;

    const fiveHundredCoin = (money - (money % 500)) / 500;
    money = money - 500 * fiveHundredCoin;

    const oneHundredCoin = (money - (money % 100)) / 100;
    money = money - 100 * oneHundredCoin;

    const halfHundredCoin = (money - (money % 50)) / 50;
    money = money - 50 * halfHundredCoin;

    const tenCoin = (money - (money % 10)) / 10;
    money = money - 10 * tenCoin;

    const oneCoin = (money - (money % 1)) / 1;
    money = money - 1 * oneCoin;

    var answer = [
        fiftyHundredCount,
        tenHundredCount,
        fiveHundredCount,
        oneHundredCount,
        fiveHundredCoin,
        oneHundredCoin,
        halfHundredCoin,
        tenCoin,
        oneCoin,
    ];
    return answer;
}

module.exports = problem5;
