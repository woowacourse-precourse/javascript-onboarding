function problem5(money) {
    return Classification(money);
}

function Classification(money) {
    const walletArr = [];
    const kindOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    let leftMoney = money;
    for (let kinds of kindOfMoney) {
        walletArr.push(Math.floor(leftMoney / kinds));
        leftMoney = leftMoney % kinds;
    }
    return walletArr;
}

module.exports = problem5;