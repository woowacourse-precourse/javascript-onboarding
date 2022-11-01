function problem3(number) {
    return toLastNumberIteratation(number);
}

function threeSixNineCount(num) {
    const numSplit = String(num).split("");
    const threeSixNineArr = numSplit.filter(isThreeSixNineCheck);
    return threeSixNineArr.length;
}

function isThreeSixNineCheck(digit) {
    return digit === '3' || digit === '6' || digit === '9';
}

function toLastNumberIteratation(number) {
    let count = 0;
    for (let num = 1; num <= number; num++) {
        count += threeSixNineCount(num);
    }
    return count;
}

module.exports = problem3;