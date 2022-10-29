function problem1(pobi, crong) {
    [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage] = [undefined, undefined, undefined, undefined];
    if (Array.isArray(pobi)) {
        [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage] = [pobi[0], pobi[1], crong[0], crong[1]];
    }

    /** 2~3단계) 각 자리 숫자를 모두 더하는 함수 */
    const sum = (n) => {
        let sumIs = 0;
        while (n > 0) {
            sumIs += n % 10;
            n = parseInt(n / 10);
        }
        return sumIs;
    };

    /** 2~3단계) 각 자리 숫자를 모두 곱하는 함수 */
    const multiply = (n) => {
        let multiplyIs = 1;
        while (n > 0) {
            multiplyIs *= n % 10;
            n = parseInt(n / 10);
        }
        return multiplyIs;
    };
}

module.exports = problem1;
