function problem5(money) {
    var answer = [];

    const moneyIndex = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    for (let i = 0; i < moneyIndex.length; i++) {
        let paperCount = Math.floor(money / moneyIndex[i]);
        answer.push(paperCount);
        money -= moneyIndex[i] * paperCount;
    }

    return answer;
}

module.exports = problem5;
