function problem2(cryptogram) {
    let beforeStr = cryptogram;
    let afterStr = overlapCheck(cryptogram);
    while (beforeStr.length !== afterStr.length) {
        beforeStr = afterStr;
        afterStr = overlapCheck(beforeStr);
    }
    const answer = afterStr;
    return answer;
}

function overlapCheck(crypto) {
    let str = '';
    for (let i = 0; i < crypto.length; i++) {
        if (crypto[i] !== crypto[i + 1] && (crypto[i - 1] !== crypto[i])) {
            str += crypto[i];
        }
    }
    return str;
}

module.exports = problem2;