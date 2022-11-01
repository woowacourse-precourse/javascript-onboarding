function problem2(cryptogram) {
    let beforeStr = cryptogram;
    let afterStr = reduplicationCheck(cryptogram);
    while (beforeStr.length !== afterStr.length) {
        beforeStr = afterStr;
        afterStr = reduplicationCheck(beforeStr);
    }
    return afterStr;
}

function reduplicationCheck(cryptogram) {
    const cryptogramSplit = cryptogram.split("");
    const uniqueArr = cryptogramSplit.filter(isUnique);
    return uniqueArr.join("");
}

function isUnique(char, index, array) {
    return (char !== array[index + 1] && (array[index - 1] !== char));
}

module.exports = problem2;