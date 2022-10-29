function problem1(pobi, crong) {
    // 1단계) 입력받은 길이 2배열의 요소들을 각각의 변수에 저장
    [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage] = [undefined, undefined, undefined, undefined];
    if (Array.isArray(pobi)) {
        [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage] = [pobi[0], pobi[1], crong[0], crong[1]];
    }

    // 6단계) 게임시작 전에 예외사항이 발생하면 -1을 반환하고 게임을 종료
    if (pobiLeftPage <= 1 || pobiRightPage <= 1 || crongLeftPage <= 1 || crongRightPage <= 1) {
        return -1;
    }
    if (pobiLeftPage >= 400 || pobiRightPage >= 400 || crongLeftPage >= 400 || crongRightPage >= 400) {
        return -1;
    }
    if (pobiRightPage - pobiLeftPage !== 1 || crongRightPage - crongLeftPage !== 1) {
        return -1;
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
        return Math.max(sum(nameLeftPage), sum(nameRightPage), multiply(nameLeftPage), multiply(nameRightPage));
    };

    // 4단계) 본인의 점수를 구함
    const pobiScore = getBigScore(pobiLeftPage, pobiRightPage);
    const crongScore = getBigScore(crongLeftPage, crongRightPage);

    // 5단계) 요구사항에 따라서 게임의 승자를 구함. 1:pobi승리 2:crong승리 0:무승부
    if (pobiScore > crongScore) {
        console.log(1);
        return 1;
    }
    if (pobiScore < crongScore) {
        console.log(2);
        return 2;
    }
    if (pobiScore === crongScore) {
        console.log(0);
        return 0;
    }
}

module.exports = problem1;
