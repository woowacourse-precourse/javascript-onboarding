function problem1(pobi, crong) {
    function splitNum(num) {
        num = num + "";
        let arrNum = num.split("");
        let plus = arrNum.map(x => +x).reduce((a, b) => a + b);
        let mul = arrNum.reduce((a, b) => a * b);
        return plus, mul;
    }

    function findMax(arr) {
        if (arr[0] + 1 !== arr[1]) return -1;
        return Math.max(splitNum(arr[0]), splitNum(arr[1]))
    }

    let pobiNum = findMax(pobi);
    let crongNum = findMax(crong);
    if ((pobiNum == -1) || (crongNum == -1)) return -1;
    else if (pobiNum > crongNum) return 1;
    else if (pobiNum < crongNum) return 2;
    else return 0; // pobiNum == crongNum
}

module.exports = problem1;
