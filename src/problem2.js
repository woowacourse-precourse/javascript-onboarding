function problem2(cryptogram) {
    let wordArr = cryptogram.split("");

    // 1단계~2단계) 연속되는 문자열을 발견하면 해당 문자열과 다음 문자열을 제외하는 함수
    const findRepetition = (word) => {
        for (i = 0; i < word.length; i++) {
            if (word[i] == word[i + 1]) {
                wordArr.splice(i, 2);
                break;
            }
        }
    };
}

module.exports = problem2;
