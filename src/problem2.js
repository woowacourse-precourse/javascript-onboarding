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

    // 3단계) 정규식으로 2개가 연속된 문자열 찾기 return boolean
    const reg = /(.)\1+/;
    // 연속된 문자열이 존재한다면 해당 문자열을 제외하는 함수를 실행합니다.
    while (reg.test(wordArr.join(""))) {
        findRepetition(wordArr);
    }

    // 4. 배열을 문자열로 합친 결과를 반환합니다.
    return wordArr.join("");
}

module.exports = problem2;
