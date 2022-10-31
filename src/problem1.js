function problem1(pobi, crong) {
    let pobiScore = score(pobi);
    let crongScore = score(crong);
    let checkPage = isConsecutive(pobi) && isConsecutive(crong);
    if (checkPage) {
        return pobiScore === crongScore ? 0 : pobiScore > crongScore ? 1 : 2;
    } else {
        return -1;
    }
}

function calcPage(arr, i) {
    const eachNumArr = `${arr[i]}`.split('').map(Number);
    const sum = eachNumArr.reduce((prev, curr) => {
        return prev + curr;
    });
    const multiply = eachNumArr.reduce((prev, curr) => {
        return prev * curr;
    });
    return Math.max(sum, multiply);
}

function score(arr) {
    return Math.max(calcPage(arr, 0), calcPage(arr, 1));
}

function isConsecutive(arr) {
    return arr[1] - arr[0] === 1 ? true : false;
}

module.exports = problem1;
