function problem2(cryptogram) {
    var answer;
    let cryptogramCopy = cryptogram;
    for (;;) {
        if (cryptogramCopy === removeDuplicateCharacters(cryptogramCopy)) {
            return cryptogramCopy;
        } else {
            cryptogramCopy = removeDuplicateCharacters(cryptogramCopy);
        }
    }
}
function removeDuplicateCharacters(stringList) {
    let answer = [];
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i] !== stringList[i + 1]) {
            if (stringList[i] === stringList[i - 1]) {
                answer[i] = "";
            } else {
                answer[i] = stringList[i];
            }
        } else {
            answer[i] = "";
        }
    }
    return answer.join("");
}
module.exports = problem2;
