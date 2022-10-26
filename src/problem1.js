function problem1(pobi, crong) {
    const maxScoreArr = [];
    if (exception(pobi, crong)) {
        return -1;
    }
    maxScoreArr.push(maxNumber(pobi));
    maxScoreArr.push(maxNumber(crong));
    let answer = compScore(maxScoreArr);
    return answer;
}

function maxNumber(people) {
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

function compScore(scoreArr) {
    let result;
    const maxScore = Math.max(...scoreArr);
    result = scoreArr.indexOf(maxScore) + 1;
    if ((scoreArr[0] === scoreArr[1])) {
        result = 0;
    }
    return result;
}

function exception(pobi, crong) {
    return (pobi[1] !== pobi[0] + 1) || (crong[1] !== crong[0] + 1);
}
module.exports = problem1;