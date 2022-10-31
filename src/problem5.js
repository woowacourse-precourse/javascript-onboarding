function problem5(money) {
    let count = 0;
    const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    const answer = [];

    for (let x of arr) {
        count = Math.floor(money / x);
        money = money - x * Math.floor(money / x);
        answer.push(count);
    }

    return answer;
}

module.exports = problem5;
