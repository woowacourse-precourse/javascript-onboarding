// 최대값을 찾아주는 함수
// 숫자를 문자열 -> 배열로 만들고 요소들의 합을 구하고 최대값을 리턴해준다.
const findMaxNumber = (arr) => {
    let leftNumberArr = arr[0].toString().split('').map(Number);
    let rightNumberArr = arr[1].toString().split('').map(Number);

    const newArr = [
        leftNumberArr.reduce((a, c) => a + c, 0),
        leftNumberArr.reduce((a, c) => a * c, 1),
        rightNumberArr.reduce((a, c) => a + c, 0),
        rightNumberArr.reduce((a, c) => a * c, 1),
    ];

    return Math.max(...newArr);
};
// 예외처리 함수
// 모든 예외 사항을 통과하면 true를 반환한다.
const check = (arr) => {
    const leftNumber = arr[0];
    const rightNumber = arr[1];

    // 왼쪽 페이지 숫자가 오른쪽보다 큰 경우
    if (leftNumber > rightNumber) {
        return false;
    }
    // 페이지 범위를 벗어난 경우
    if (leftNumber < 1 || rightNumber > 400) {
        return false;
    }
    // 첫번째 페이지 or 마지막 페이지를 편 경우
    if (
        leftNumber === 1 ||
        rightNumber === 400 ||
        leftNumber === 399 ||
        rightNumber === 2
    ) {
        return false;
    }
    // 페이지 수가 연속되지 않는 경우
    if (!(rightNumber - 1 === leftNumber)) {
        return false;
    }

    return true;
};

function problem1(pobi, crong) {
    if (!check(pobi) || !check(crong)) {
        return -1;
    }
    const pobiMax = findMaxNumber(pobi);
    const crongMax = findMaxNumber(crong);

    return pobiMax > crongMax ? 1 : 0;
}

module.exports = problem1;
