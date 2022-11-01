function problem3(number) {
    var count = 0;

    for (let i = 1; i <= number; i++) {
        for (let j of String(i)) {
            if (j === "3" || j === "6" || j === "9") {
                count++;
            }
        }
    }
    var answer = count;
    return answer;
}

module.exports = problem3;
