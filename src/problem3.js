function problem3(number) {
    let answer = toNumber(number);
    return answer;
}

function numCheck(num) {
    const str = String(num).split("");
    const threeSixNineArr = str.filter(element => element === '3' || element === '6' || element === '9');
    return threeSixNineArr.length;
}

function toNumber(num) {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        cnt += numCheck(i);
    }
    return cnt;
}
module.exports = problem3;