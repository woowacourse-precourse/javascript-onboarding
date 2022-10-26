function problem1(pobi, crong) {
    var answer;

    // 1. 큰 수 구하기
    // - 오른쪽 페이지 번호의 덧셈값과 곱셉값 구하기
    // - 둘 중 큰 수 구하기
    function getBiggestNumber(arr) {
        const rightPage = String(arr[1]).split("");
        let add = 0;
        let mul = 1;
        for (let i = 0; i < rightPage.length; i++) {
            add += Number(rightPage[i]);
            mul *= Number(rightPage[i]);
        }
        const biggestNumber = add > mul ? add : mul;
        return biggestNumber;
    }

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
    if (getBiggestNumber(pobi) > getBiggestNumber(crong)) {
        answer = 1;
    } else if (getBiggestNumber(pobi) < getBiggestNumber(crong)) {
        answer = 2;
    } else if (getBiggestNumber(pobi) === getBiggestNumber(crong)) {
        answer = 0;
    } else answer = -1;

    return answer;
}

module.exports = problem1;
