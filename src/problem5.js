function problem5(money) {
    var answer;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const smallAbc = alphabet.split("");
    const bigAbc = alphabet.toUpperCase().split("");
    const maxIndex = alphabet.length - 1;

    let wordArr = word.split("");
    let answerArr = [];

    const isUpperCase = (e) => {
        return e.toUpperCase() === e;
    };

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == " ") {
            answerArr.push(wordArr[i]);
        } else if (isUpperCase(wordArr[i])) {
            answerArr.push(bigAbc[maxIndex - bigAbc.indexOf(wordArr[i])]);
        } else if (!isUpperCase(wordArr[i])) {
            answerArr.push(smallAbc[maxIndex - smallAbc.indexOf(wordArr[i])]);
        }
    }
    answer = answerArr.join("");
    return answer;
}

module.exports = problem5;
