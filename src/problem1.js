/*
기능 목록 
1. pobi, crong 가장 큰 값 가져오기
2. 점수 비교
3. 각 값의 add, muliply 후 큰 값 반환하기
4. 시작 면이나 마지막 면이 나오거나 책의 페이지가 이상하게 펼쳐졌을 때 예외 처리
*/

function compareValue(v1, v2) {
    if (v1 > v2) return v1
    else if (v2 > v1) return v2
    else return v1
}

function addmulValue(page) {
    let v,add = 0, mul = 1
    while (page > 0) {
        v = page % 10
        add += v
        mul *= v
        page = parseInt(page/10)
    }
    return compareValue(add, mul)
}

function getValue(a) {
    let l, r;
    l = addmulValue(a[0])
    r = addmulValue(a[1])
    return compareValue(l, r)
}

function exceptHandling(a) {
    if (a.length !== 2) return 1;
    if (a[0] === 1 && a[1] === 2) return 1
    else if (a[0] === 399 && a[1] === 400) return 1

    if (a[1] - a[0] <= 0) return 1

    if (a[1] - a[0] >= 2) return 1
}

function problem1(pobi, crong) {
    var answer
    if (exceptHandling(pobi) || exceptHandling(crong)) {
        answer = -1
        return answer
    }
    let pobiValue = getValue(pobi);
    let crongValue = getValue(crong);
    if (pobiValue > crongValue) answer = 1;
    else if (pobiValue < crongValue) answer = 2
    else answer = 0

    return answer
}

module.exports = problem1
