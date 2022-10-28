function problem1(pobi, crong) {
    // var answer;
    if (exception(pobi) && exception(crong)) {
        const pobiPoint = getMaxPoint(pobi);
        const crongPoint = getMaxPoint(crong);

        if (pobiPoint === crongPoint) return 0;
        else return pobiPoint > crongPoint ? 1 : 2;
    } else {
        return -1;
    }

    // return answer;
}

function exception(arr) {
    if (
        arr[0] >= arr[1] ||
        arr[0] % 2 == 0 ||
        arr[1] % 2 == 1 ||
        arr[1] - 1 !== arr[0] ||
        arr[0] === null ||
        arr[1] === null
    ) {
        return false;
    } else {
        return true;
    }
}

module.exports = problem1;

// 1. 예외의 경우 확인.
// 2. 왼쪽,오른쪽 장의 합, 곱을 구하기.
// 3. 비교 후 결과값 리턴.
