function pageMaxScore(page) {
    const pageList = page
        .toString()
        .split("")
        .map((num) => Number(num));

    const sumResult = pageList.reduce((acc, cur) => acc + cur, 0);
    const multipleResult = pageList.reduce((acc, cur) => acc * cur);

    return sumResult > multipleResult ? sumResult : multipleResult;
}

function myMaxScore(userPage) {
    const [leftPage, rightPage] = userPage;
    if (rightPage - leftPage !== 1 || leftPage === 1 || rightPage === 400) {
        return -1;
    }
    const leftMax = pageMaxScore(leftPage);
    const rightMax = pageMaxScore(rightPage);

    return leftMax > rightMax ? leftMax : rightMax;
}

function compareScore(userScore1, userScore2) {
    if (userScore1 === -1 || userScore2 === -1) {
        return -1;
    }
    if (userScore1 > userScore2) {
        return 1;
    }
    if (userScore1 < userScore2) {
        return 2;
    }
    if (userScore1 === userScore2) {
        return 0;
    }
}

function problem1(pobi, crong) {
    const pobiScore = myMaxScore(pobi);
    const crongScore = myMaxScore(crong);

    return compareScore(pobiScore, crongScore);
}

module.exports = problem1;
