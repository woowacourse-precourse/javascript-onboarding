function problem1(pobi, crong) {
    if (exception(pobi, crong)) {
        return -1;
    }
    return compareMaxNumber(pobi, crong);
}

function eachPagePlus(page) {
    const pageSplit = page.toString().split("");
    return pageSplit.reduce(plus, 0);
}

function plus(sum, eachDigit) {
    sum += Number(eachDigit);
    return sum;
}

function eachPageMultiply(page) {
    const pageSplit = page.toString().split("");
    return pageSplit.reduce(multiply, 1);
}

function multiply(result, eachDigit) {
    result *= eachDigit;
    return result;
}

function calculationcollection(openBook) {
    return [...openBook.map(eachPagePlus), ...openBook.map(eachPageMultiply)];
}

function maxNumberCheck(openBook) {
    return Math.max(...calculationcollection(openBook));
}

function compareMaxNumber(people1, people2) {
    const pobi = maxNumberCheck(people1);
    const crong = maxNumberCheck(people2);
    return maxNumberSame(pobi, crong) ? 0 : maxNumberDifferent(pobi, crong);
}

function maxNumberSame(people1, people2) {
    return Number(people1 === people2);
}

function maxNumberDifferent(people1, people2) {
    const maxScoreArr = [people1, people2];
    const winner = Math.max(...maxScoreArr);
    return maxScoreArr.indexOf(winner) + 1;
}

function exception(pobi, crong) {
    return (pobi[1] !== pobi[0] + 1) || (crong[1] !== crong[0] + 1);
}
module.exports = problem1;