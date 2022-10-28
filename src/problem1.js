function problem1(pobi, crong) {
    const maxScoreArr = [];
    if (exception(pobi, crong)) {
        return -1;
    }
    maxScoreArr.push(maxNumberCheck(pobi));
    maxScoreArr.push(maxNumberCheck(crong));
    let answer = compScore(maxScoreArr);
    return answer;
}

function maxNumberCheck(people) {
    const score = [];
    people.forEach(el => {
        const str = String(el).split("");
        const sum = str.reduce((acc, cur) => (Number(acc) + Number(cur)));
        const mult = str.reduce((acc, cur) => acc * cur);
        score.push(sum);
        score.push(mult);
    })
    return Math.max(...score);
}

function compScore(maxScoreArr) {
    const maxScore = Math.max(...maxScoreArr);
    let result = maxScoreArr.indexOf(maxScore) + 1;
    if ((maxScoreArr[0] === maxScoreArr[1])) {
        result = 0;
    }
    return result;
}

function exception(pobi, crong) {
    return (pobi[1] !== pobi[0] + 1) || (crong[1] !== crong[0] + 1);
}
module.exports = problem1;