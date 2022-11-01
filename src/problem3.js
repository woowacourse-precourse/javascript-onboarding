function problem3(number) {
    let answer = 0;
    let digits = [];

    for (let i = 1; i <= number; i++) {
        digits = i
            .toString()
            .split("")
            .map((ele) => parseInt(ele));

        digits.forEach((num) => {
            if (num === 3 || num === 6 || num === 9) {
                answer += 1;
            }
        });
    }

    return answer;
}

module.exports = problem3;
