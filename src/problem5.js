function problem5(money) {
    var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let currentMoney = money;
    function getAnswer(currency, index) {
        if (currentMoney / currency > 0) {
            answer[index] = Math.trunc(currentMoney / (currency * 5));
            currentMoney = currentMoney - answer[index] * (currency * 5);
            answer[index + 1] = Math.trunc(currentMoney / currency);
            currentMoney = currentMoney - answer[index + 1] * currency;
        }
    }
    getAnswer(10000, 0);
    getAnswer(1000, 2);
    getAnswer(100, 4);
    getAnswer(10, 6);
    answer[8] = currentMoney;

    return answer;
}

module.exports = problem5;
