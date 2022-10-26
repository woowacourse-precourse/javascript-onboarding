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

function problem1(pobi, crong) {
    var answer = 1;
    return answer;
}

module.exports = problem1;

// 1. 왼쪽페이지, 오른쪽페이지 계산.
//  1-1. 덧셈값
//  1-2. 곱셈값

// 2. 결과값으로 큰 값 구하기

// 3. 값 비교하여 결과 반환

// 예외 처리할 것
// 연속하지 않은 숫자, 왼쪽 짝수, 오른쪽홀수, 첫페이지 마지막페이지
