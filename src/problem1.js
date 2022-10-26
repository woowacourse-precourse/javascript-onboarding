// 덧셈과 곱셈중 큰 값 반환
function pageMaxScore(page) {
    const a = page
        .toString()
        .split("")
        .map((item) => Number(item));

    const sumResult = a.reduce((acc, cur) => acc + cur, 0);
    const multipleResult = a.reduce((acc, cur) => acc * cur);

    return sumResult > multipleResult ? sumResult : multipleResult;
}

// 왼쪽페이지 오른쪽 페이지의 값 비교해서 큰 값 반환
function myMaxScore(user) {
    const [leftPage, rightPage] = user;
    if (rightPage - leftPage !== 1) {
        return -1;
    }
    const leftMax = pageMaxScore(leftPage);
    const rightMax = pageMaxScore(rightPage);

    return leftMax > rightMax ? leftMax : rightMax;
}

function problem1(pobi, crong) {
    const pobiScore = myMaxScore(pobi);
    const crongScore = myMaxScore(crong);

    if ((pobiScore || crongScore) === -1) {
        return -1;
    }

    if (pobiScore > crongScore) {
        return 1;
    }
    if (pobiScore < crongScore) {
        return 2;
    }
    if (pobiScore === crongScore) {
        return 0;
    }
}

module.exports = problem1;