function pageMaxScore(page) {
    const a = page
        .toString()
        .split("")
        .map((item) => Number(item));

    const sumResult = a.reduce((acc, cur) => acc + cur, 0);
    const multipleResult = a.reduce((acc, cur) => acc * cur);

    return sumResult > multipleResult ? sumResult : multipleResult;
}

function myMaxScore(user) {
    const [leftPage, rightPage] = user;
    if (rightPage - leftPage !== 1 || leftPage === 1 || rightPage === 400) {
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
