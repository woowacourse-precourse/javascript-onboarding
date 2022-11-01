function getNum(num) {
    let digit = [];
    var add = 0;
    var mul = 1;
    while (num > 0) {
        digit.push(num % 10);
        num = Math.floor(num / 10);
    }
    digit.forEach(ele => {
        add += ele;
        mul *= ele;
    });
    return Math.max(add, mul);
}
function ExceptionCase(pobi, crong) {
    // 양페이지의 차이가 1이 아니라면 예외처리
    if (pobi[1] - pobi[0] != 1) { return true; }
    if (crong[1] - crong[0] != 1) { return true; }
    // 왼쪽 페이지가 홀수라면 예외처리
    if (pobi[0] % 2 == 0) { return true; }
    if (crong[0] % 2 == 0) { return true; }
    // 범위 밖이라면
    if (pobi[0] < 0) { return true; }
    if (crong[0] < 0) { return true; }
    if (pobi[1] > 400) { return true; }
    if (crong[1] > 400) { return true; }
}
function problem1(pobi, crong) {
    var answer;
    if (ExceptionCase(pobi, crong)) {
        return -1;
    }
    
    var pobiMax = Math.max(getNum(pobi[0]), getNum(pobi[1]));
    var crongMax = Math.max(getNum(crong[0]), getNum(crong[1]));

    if (pobiMax == crongMax)
        answer = 0;
    else if (pobiMax > crongMax)
        answer = 1;
    else if (pobiMax < crongMax)
        answer = 2;
    return answer;
}
module.exports = problem1;
