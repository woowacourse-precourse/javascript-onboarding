const clapNumber = {
    three: 3,
    six: 6,
    nine: 9
}

function problem3(number) {
    let answer = 0;
    
    for (let i = 1 ; i < number + 1 ; i ++) {
        let current = i;
        while (current !== 0) {
            if (current % 10 === clapNumber.three || current % 10 === clapNumber.six || current % 10 === clapNumber.nine) {
                answer += 1;
            }
            current = Math.floor(current / 10);
        }
    }
    
    return answer;
}

module.exports = problem3;
