const getMaxFromArray = (array) =>
    Math.max(
        ...array
            .map((item) => [...item.toString()])
            .map((item) => [item.reduce((a, b) => +a + +b), item.reduce((a, b) => +a * +b)])
            .flat()
    );

const checkPage = ([leftPage, rightPage]) =>
    leftPage <= 1 ||
    leftPage >= 399 ||
    rightPage <= 2 ||
    rightPage >= 400 ||
    rightPage - leftPage !== 1
        ? false
        : true;

function problem1(pobi, crong) {
    const [POBI_WIN, CRONG_WIN, DRAW, EXCEPTION] = [1, 2, 0, -1];

    const validateArray = {
        pobi: checkPage(pobi),
        crong: checkPage(crong),
    };

    const hasException = Object.values(validateArray).some((item) => !item);
    if (hasException) return EXCEPTION;

    const [pobiMax, crongMax] = [getMaxFromArray(pobi), getMaxFromArray(crong)];
    if (pobiMax === crongMax) return DRAW;

    return pobiMax > crongMax ? POBI_WIN : CRONG_WIN;
}

module.exports = problem1;
