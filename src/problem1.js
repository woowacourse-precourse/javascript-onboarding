function problem1(pobi, crong) {
    var answer;

    const [lPobi, rPobi] = pobi;
    const [lCrong, rCrong] = crong;

    if (rPobi - lPobi !== 1 || rCrong - lCrong !== 1) return -1;

    const pobiMax = Math.max(
        maxNum(eachNumber(lPobi)),
        maxNum(eachNumber(rPobi))
    );

    const crongMax = Math.max(
        maxNum(eachNumber(lCrong)),
        maxNum(eachNumber(rCrong))
    );

    if (pobiMax === crongMax) {
        answer = 0;
    } else if (pobiMax > crongMax) {
        answer = 1;
    } else {
        answer = 2;
    }

    return answer;
}

function maxNum(numList) {
    const sumValue = sumValueOfList(numList);
    const multiValue = multipleValueOfList(numList);

    return sumValue >= multiValue ? sumValue : multiValue;
}

function sumValueOfList(numList) {
    const sumValue = 0;
    return numList.reduce((a, b) => a + b, sumValue);
}

function multipleValueOfList(numList) {
    const multiValue = 1;
    return numList.reduce((a, b) => a * b, multiValue);
}

function eachNumber(num) {
    const list = [];
    while (num >= 10) {
        list.push(num % 10);
        num = Math.floor(num / 10);
    }
    list.push(num);
    return list;
}

module.exports = problem1;
