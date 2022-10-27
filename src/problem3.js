function problem3(number) {
    let includedNumbers = [...Array(number + 1).keys()]
        .map((item) => item.toString())
        .filter((item) => item.includes('3') || item.includes('6') || item.includes('9'));

    if (!includedNumbers.length) return 0;

    return includedNumbers
        .map((item) => item.split('3').length + item.split('6').length + item.split('9').length - 3)
        .reduce((a, b) => a + b);
}

module.exports = problem3;
