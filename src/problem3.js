function problem3(number) {
    var answer = 0;
    for (let i = 1; i <= number; i++) {
        let arr = String(i).split("");
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === "3" || arr[j] === "6" || arr[j] === "9") {
                answer++;
            }
        }
    }
    return answer;
}

module.exports = problem3;
