const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
function problem5(money) {
    var answer = [];
    for (var i = 0; i < cash.length; i++) {
        var cnt = Math.floor(money / cash[i]); // 나눌때 floor를 잊지말아야한다.
        money -= cnt * cash[i];
        answer.push(cnt);
    }
    return answer;
}
module.exports = problem5;
