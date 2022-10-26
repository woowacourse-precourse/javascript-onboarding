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

    return answer;
}

module.exports = problem1;
