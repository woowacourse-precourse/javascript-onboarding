function problem1(pobi, crong) {
    var answer;

    // 1. 큰 수 구하기
    // - 왼쪽, 오른쪽 번호 각각 덧셈값과 곱셈값 구하기
    // - 가장 큰 수 구하기
    function getBiggestNumber(pages) {
        const leftPage = String(pages[0]).split("");
        const rightPage = String(pages[1]).split("");

        const leftSum = eval(leftPage.join("+"));
        const leftMul = eval(leftPage.join("*"));
        const rightSum = eval(rightPage.join("+"));
        const rightMul = eval(rightPage.join("*"));

        return Math.max(leftSum, leftMul, rightSum, rightMul);
    }

    const pobiNumber = getBiggestNumber(pobi);
    const crongNumber = getBiggestNumber(crong);

    // 2. 점수 구하기
    // - pobi가 이기면 1, crong이 이기면 2, 무승부는 0
    // - 왼쪽 페이지가 홀수가 아니거나, 오른쪽 페이지가 왼쪽 페이지 +1이 아니거나, 시작 면 또는 마지막 면이라면 -1
    function checkPages(arr) {
        let result;
        if (
            arr[0] % 2 === 1 &&
            arr[1] === arr[0] + 1 &&
            arr[0] !== 1 &&
            arr[1] !== 400
        ) {
            result = true;
        } else result = false;
        return result;
    }

    if (checkPages(pobi) === false || checkPages(crong) === false)
        return (answer = -1);
    if (pobiNumber > crongNumber) {
        answer = 1;
    } else if (pobiNumber < crongNumber) {
        answer = 2;
    } else if (pobiNumber === crongNumber) {
        answer = 0;
    } else answer = -1;

    return answer;
}

module.exports = problem1;
