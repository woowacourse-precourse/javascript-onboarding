function problem3(number) {
    let answer;
    return answer;
}

function numCheck(num) {
    const str = String(num).split("");
    const threeSixNineArr = str.filter(element => element === '3' || element === '6' || element === '9');
    return threeSixNineArr.length;
}
module.exports = problem3;