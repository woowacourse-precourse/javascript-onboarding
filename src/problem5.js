function problem5(money) {
    var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    while (true) {
        if (money < 10) {
            answer[8] = money;
            break;
        } else if (money < 50) {
            answer[7] = Number.parseInt(money / 10);
            money %= 10;
        } else if (money < 100) {
            answer[6] = Number.parseInt(money / 50);
            money %= 50;
        } else if (money < 500) {
            answer[5] = Number.parseInt(money / 100);
            money %= 100;
        } else if (money < 1000) {
            answer[4] = Number.parseInt(money / 500);
            money %= 500;
        } else if (money < 5000) {
            answer[3] = Number.parseInt(money / 1000);
            money %= 1000;
        } else if (money < 10000) {
            answer[2] = Number.parseInt(money / 5000);
            money %= 5000;
        } else if (money < 50000) {
            answer[1] = Number.parseInt(money / 10000);
            money %= 10000;
        } else if (money > 50000) {
            answer[0] = Number.parseInt(money / 50000);
            money %= 50000;
        }
    }

    return answer;
}

module.exports = problem5;
