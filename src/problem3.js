function problem3(number) {
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        for (let j = 0; j < i.toString().length; j++) {
            let char = i.toString()[j];
            if (char === "3" || char === "6" || char === "9") answer++;
        }
    }
    return answer;
}

module.exports = problem3;
