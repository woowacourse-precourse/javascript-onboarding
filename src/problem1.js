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
            getPlusNum(name[ pageIndex.left ]),
            getMultipleNum(name[ pageIndex.left ]),
            getPlusNum(name[ pageIndex.right ]),
            getMultipleNum(name[ pageIndex.right ])
        )
    }
    
    const pobiScore = getMaxScore(pobi);
    const crongScore = getMaxScore(crong);
    if (pobiScore < crongScore) {
        answer = winnerCount.crong;
    }
    if (pobiScore > crongScore) {
        answer = winnerCount.pobi;
    }
    if (
        pobi[ pageIndex.left ] + 1 !== pobi[ pageIndex.right ]
        ||
        crong[ pageIndex.left ] + 1 !== crong[ pageIndex.right ]
    ) {
        answer = winnerCount.exception;
    }
    return answer
}

module.exports = problem1;
