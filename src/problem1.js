function problem1(pobi, crong) {
    const check = (arr) => {
        if (arr[0] + 1 !== arr[1]) return false;
        if (arr[0] % 2 === 0) return false;
        if (arr[0] < 1) return false;
        if (arr[1] > 400) return false;
        return true;
    };
    if (!check(pobi) || !check(crong)) return -1;
    else {
        const getMax = (arr) => {
            let max = 0;
            for (let i in arr) {
                let now = (arr[i] + "").split("").map(Number);
                let sum = now.reduce((a, b) => a + b, 0);
                if (sum > max) max = sum;
                let multiply = now.reduce((a, b) => a * b, 1);
                if (multiply > max) max = multiply;
            }
            return max;
        };
        let a = getMax(pobi);
        let b = getMax(crong);
        if (a === b) return 0;
        else if (a > b) return 1;
        else return 2;
    }
}
module.exports = problem1;
