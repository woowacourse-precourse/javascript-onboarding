function problem1(pobi, crong) {
    function checkException([p1, p2]) {
        if (p1 !== p2 - 1 || p1 === 1 || p2 === 400) return true;
        return false;
    }

    const calculateDigits = {
        add(arr) {
            return arr.reduce((sum, cur) => sum + cur);
        },
        multiply(arr) {
            return arr.reduce((sum, cur) => sum * cur);
        }
    };

    function convertPageIntoArray(num) {
        return num
            .toString()
            .split("")
            .map((ele) => parseInt(ele));
    }

    function calculatePages([p1, p2]) {
        let results = [];
        let p1Digits = convertPageIntoArray(p1);
        let p2Digits = convertPageIntoArray(p2);

        results.push(calculateDigits.add(p1Digits));
        results.push(calculateDigits.add(p2Digits));
        results.push(calculateDigits.multiply(p1Digits));
        results.push(calculateDigits.multiply(p2Digits));

        return Math.max(...results);
    }

    if (checkException(pobi)) return -1;
    if (checkException(crong)) return -1;

    const pobiMaxNumber = calculatePages(pobi);
    const crongMaxNumber = calculatePages(crong);

    if (pobiMaxNumber === crongMaxNumber) {
        return 0;
    } else if (pobiMaxNumber > crongMaxNumber) {
        return 1;
    } else {
        return 2;
    }
}

module.exports = problem1;
