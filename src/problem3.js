function problem3(number) {
    let answer = 0;
    const numbers = [];

    for (let i = 1; i <= 10000; i++) {
        numbers.push(String(i));
    }

    for (let i = 0; i < 10000; i++) {
        let count = numbers[i].split('3').length - 1;
        count += numbers[i].split('6').length - 1;
        count += numbers[i].split('9').length - 1;
        if (count > 0) {
            answer += count;
        }
        if (i + 1 === number) break;
    }

    return answer;
}

module.exports = problem3;
