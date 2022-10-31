function problem3(number) {
    let answer = 0;
    const clapNumbers = [3,6,9]
    
    for (let i = 1 ; i < number + 1 ; i ++) {
        let current = i;
        while (current !== 0) {
            if (clapNumbers.includes(current%10)) {
                answer += 1;
            }
            current = Math.floor(current / 10);
        }
    }
    
    return answer;
}

module.exports = problem3;
