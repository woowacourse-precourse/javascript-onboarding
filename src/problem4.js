function problem4(word) {
    // 입력받은 문자열을 아스키코드로 변환한 배열
    const asciiAlphabetArray = word.split("").map((el) => el.charCodeAt());

    /** 1단계) 알파벳의 아스키코드를 입력받으면 해당 알파벳의 인덱스를 반환하는 함수
     * @returns => 알파벳의 인덱스 a/A:1, b/B:1, ... , z/Z:26
     */
    const getAlphabetIndex = (asciiAlphabet) => {
        if (asciiAlphabet < 97) {
            return asciiAlphabet % 64;
        }
        if (asciiAlphabet >= 97) {
            return asciiAlphabet % 96;
        }
    };
}

module.exports = problem4;
