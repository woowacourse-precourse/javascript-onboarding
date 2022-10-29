function problem1(pobi, crong) {
    // 1단계) 입력받은 배열의 요소를 알기 쉬운 변수명으로 저장
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

    /**  4단계) 가장 큰 수를 구하는 함수 */
    const getBigScore = (nameLeftPage, nameRightPage) => {
        return Math.max(sum(nameLeftPage), sum(nameRightPage), multiply(nameLelftPage), multiply(nameRightPage));
    };

    // 4단계) 본인의 점수를 구합니다.
    const pobiScore = getBigScore(pobiLeftPage, pobiRightPage);
    const crongScore = getBigScore(crongLeftPage, crongRightPage);
}

module.exports = problem1;
