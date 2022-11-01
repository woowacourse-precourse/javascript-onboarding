function problem2(cryptogram) {
    var answer = "";
    let wordArr = cryptogram.split("");
    let prevLength = wordArr.length;
    let isEnd = false;

    while (!isEnd) {
        wordArr = wordArr.filter(
            (el, index, arr) => el != arr[index - 1] && el != arr[index + 1]
        );
        if (prevLength === wordArr.length) isEnd = true;
        else prevLength = wordArr.length;
    }

    for (let i = 0; i < wordArr.length; i++) {
        answer += wordArr[i];
    }
    return answer;
}
module.exports = problem2;
