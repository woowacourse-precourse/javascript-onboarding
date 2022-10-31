function problem3(number) {
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        let current = i;
        while (current > 0) {
            if (
                current % 10 === 3 ||
                current % 10 === 6 ||
                current % 10 === 9
            ) {
                answer++;
            }
            current /= 10;
            current = Math.floor(current);
        }
    }
    return answer;
}

module.exports = problem3;
