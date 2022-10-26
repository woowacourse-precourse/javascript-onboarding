function problem5(money) {
    let currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    let answer = [];
    while (currency.length > 0) {
        let now = 0;
        if (money >= currency[0]) {
            now = Math.floor(money / currency[0]);
            money -= now * currency[0];
        }
        answer.push(now);
        currency.shift();
    }
    return answer;
}
module.exports = problem5;
