function problem1(pobi, crong) {
    function chkException([p1, p2]) {
        if (p1 !== p2 - 1 || p1 === 1 || p2 === 400) return true;
        return false;
    }

    function calPages([p1, p2]) {
        let results = [];
        let p1Digits = p1
            .toString()
            .split("")
            .map((ele) => parseInt(ele));
        let p2Digits = p2
            .toString()
            .split("")
            .map((ele) => parseInt(ele));
        results.push(p1Digits.reduce((sum, cur) => sum + cur));
        results.push(p2Digits.reduce((sum, cur) => sum + cur));
        results.push(p1Digits.reduce((sum, cur) => sum * cur));
        results.push(p2Digits.reduce((sum, cur) => sum * cur));
        return Math.max(...results);
    }

    if (chkException(pobi)) return -1;
    if (chkException(crong)) return -1;

    let pobiMaxNum = calPages(pobi);
    let crongMaxNum = calPages(crong);

    if (pobiMaxNum === crongMaxNum) {
        return 0;
    } else if (pobiMaxNum > crongMaxNum) {
        return 1;
    } else {
        return 2;
    }
}

module.exports = problem1;
