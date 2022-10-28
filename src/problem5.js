function problem5(money) {
    var answer;
    answer = Classification(money);
    return answer;
}

function Classification(money) {
    const answer = [];
    let leftMoney = money;
    const fiftyThousandNumber = parseInt(leftMoney / 50000);
    answer.push(fiftyThousandNumber);
    leftMoney = leftMoney % 50000;
    const tenThousandNumber = parseInt(leftMoney / 10000);
    answer.push(tenThousandNumber);
    leftMoney = leftMoney % 10000;
    const fiveThousandNumber = parseInt(leftMoney / 5000);
    answer.push(fiveThousandNumber);
    leftMoney = leftMoney % 5000;
    const oneThousandNumber = parseInt(leftMoney / 1000);
    answer.push(oneThousandNumber);
    leftMoney = leftMoney % 1000;
    const fiveHundredNumber = parseInt(leftMoney / 500);
    answer.push(fiveHundredNumber);
    leftMoney = leftMoney % 500;
    const oneHundredNumber = parseInt(leftMoney / 100);
    answer.push(oneHundredNumber);
    leftMoney = leftMoney % 100;
    const fiftyNumber = parseInt(leftMoney / 50);
    answer.push(fiftyNumber);
    leftMoney = leftMoney % 50;
    const tenNumber = parseInt(leftMoney / 10);
    answer.push(tenNumber);
    leftMoney = leftMoney % 10;
    const oneNumber = parseInt(leftMoney / 1);
    leftMoney = leftMoney % 1;
    answer.push(oneNumber);
    return answer;
}

console.log(problem5(50237));
module.exports = problem5;