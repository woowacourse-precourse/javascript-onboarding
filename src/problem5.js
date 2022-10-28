function problem5(money) {
    const answer = Classification(money);
    return answer;
}

function Classification(money) {
    const answer = [];
    const kindOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    let leftMoney = money;
    for (let element of kindOfMoney) {
        answer.push(Math.floor(leftMoney / element));
        leftMoney = leftMoney % element;
    }
    return answer;
}

module.exports = problem5;