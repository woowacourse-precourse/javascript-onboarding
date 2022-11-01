function problem4(word) {
    var answer;
    answer = numToStr(strToNum(word)).join("");
    return answer;
}

function strToNum(stringList) {
    changeList = [];
    for (let i = 0; i < stringList.length; i++) {
        if (/[a-z|A-Z]/.test(stringList[i])) {
            changeList[i] = stringList.charCodeAt(i);
        } else {
            changeList[i] = stringList[i];
        }
    }
    return changeList;
}
function numToStr(numberList) {
    changeList = [];
    for (let i = 0; i < numberList.length; i++) {
        if (/^[0-9]/.test(numberList[i])) {
            if (numberList[i] > 96 && numberList[i] < 123) {
                changeList[i] = String.fromCharCode(219 - numberList[i]);
            } else if (numberList[i] > 24 && numberList[i] < 91) {
                changeList[i] = String.fromCharCode(155 - numberList[i]);
            }
        } else {
            changeList[i] = numberList[i];
        }
    }
    return changeList;
}
module.exports = problem4;
