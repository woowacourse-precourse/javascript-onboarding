function problem5(money) {
    let restMoney = money;
    const kindOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    const numOfPapper = [];
    for (const i of kindOfMoney) {
        numOfPapper.push(Math.floor(restMoney / i));
        restMoney = restMoney % i;
    }
    return numOfPapper;
}

module.exports = problem5;
