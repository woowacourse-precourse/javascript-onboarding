function problem3(number) {
    let arrConsecutive = Array.from(Array(number).keys(), (x) => x + 1);

    const arrStr = arrConsecutive.map((el) => {
        return `${el}`.split('');
    });

    let arrCount = [];
    for (let i = 0; i < arrStr.length; i++) {
        arrCount.push(
            arrStr[i]
                .map(
                    (el) =>
                        el.includes('3') || el.includes('6') || el.includes('9')
                )
                .filter((el) => el === true).length
        );
    }

    const answer = arrCount.reduce((prev, curr) => {
        return prev + curr;
    });

    return answer;
}

module.exports = problem3;
