function problem3(number) {
    var answer;
    let clapCnt = 0;
    let newArrayAllNumber = arrayAllNumber(number);
    for (const i of newArrayAllNumber) {
        if (i === "3" || i === "6" || i === "9") {
            clapCnt++;
        }
    }
    answer = clapCnt;
    return answer;
}

function arrayAllNumber(number) {
    list = [];
    for (let i = 1; i <= number; i++) {
        list.push(eachNumber(i));
    }
    return Array.from(list.join(""));
}
function eachNumber(num) {
    const list = [];
    while (num >= 10) {
        list.push(num % 10);
        num = Math.floor(num / 10);
    }
    list.push(num);
    return list.join("");
}
module.exports = problem3;
