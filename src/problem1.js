const pageIndex = {
    left: 0,
    right: 1,
}

const winnerCount = {
    pobi: 1,
    crong: 2,
    tie: 0,
    exception: - 1
}

function problem1(pobi, crong) {
    let answer = winnerCount.tie;
    
    function getPlusNum(targetPage) {
        return [...String(targetPage)].reduce((acc, cur) => Number(acc) + Number(cur));
    }
    
    function getMultipleNum(targetPage) {
        return [...String(targetPage)].reduce((acc, cur) => Number(acc) * Number(cur));
    }
    
    function getMaxScore(name) {
        return Math.max(
            getPlusNum(name[pageIndex.left]),
            getMultipleNum(name[pageIndex.left]),
            getPlusNum(name[pageIndex.right]),
            getMultipleNum(name[pageIndex.right])
        )
    }
    
    function checkWinner(score1, score2) {
        if (score1 < score2) {
            answer = winnerCount.crong;
        }
        if (score1 > score2) {
            answer = winnerCount.pobi;
        }
    }
    
    function checkException(a,b) {
        if (
            a[pageIndex.left] + 1 !== a[pageIndex.right]
            ||
            b[pageIndex.left] + 1 !== b[pageIndex.right]
        ) {
            answer = winnerCount.exception;
        }
    }
    
    const pobiScore = getMaxScore(pobi);
    const crongScore = getMaxScore(crong);
    
    checkWinner(pobiScore, crongScore);
    
    checkException(pobi,crong);
    
    return answer
}

module.exports = problem1;
