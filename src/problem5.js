function problem5(money) {
    let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (money) {
        if (50000 <= money) {
            money -= 50000;
            answer[0]++;
        } else if (10000 <= money) {
            money -= 10000;
            answer[1]++;
        } else if (5000 <= money) {
            money -= 5000;
            answer[2]++;
        } else if (1000 <= money) {
            money -= 1000;
            answer[3]++;
        } else if (500 <= money) {
            money -= 500;
            answer[4]++;
        } else if (100 <= money) {
            money -= 100;
            answer[5]++;
        } else if (50 <= money) {
            money -= 50;
            answer[6]++;
        } else if (10 <= money) {
            money -= 10;
            answer[7]++;
        } else if (1 <= money) {
            money -= 1;
            answer[8]++;
        }
    }
    console.log(answer);
    return answer;
}
problem5(50237);
module.exports = problem5;
