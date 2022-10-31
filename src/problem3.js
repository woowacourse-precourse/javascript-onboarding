function problem3(number) {
    var answer;
    let allNumArr = [];
    for (let i = 1; i <= number; i++) {
        allNumArr.push(i);
    }

    const clapCondition = (el) =>
        el.includes("3") || el.includes("6") || el.includes("9");

    answer = allNumArr
        .toString()
        .split("")
        .filter((el) => clapCondition(el)).length;

    return answer;
}

module.exports = problem3;
