function problem4(word) {
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

    /** 2단계) 중앙(m/n)을 기준으로 정반대 위치의 알파벳에 해당하는 아스키코드로 변환하는 함수
     * 예시) a=>z, m=>n, Z=>A, N=>M
     */
    const changeAlphabet = (asciiAlphabet, alphabetIndex) => {
        if (alphabetIndex < 14) {
            return asciiAlphabet + (14 - alphabetIndex) * 2 - 1;
        }
        if (alphabetIndex >= 14) {
            return asciiAlphabet - (alphabetIndex - 13) * 2 + 1;
        }
    };

    // 3단계) 띄어쓰기를 제외하고 아스키코드배열의 모든 요소를 변환합니다.
    for (i = 0; i < asciiAlphabetArray.length; i++) {
        let asciiAlphabet = asciiAlphabetArray[i];

        // 띄어쓰기는 변홚대상에서 제외
        if (asciiAlphabet === 32) {
            continue;
        }

        let alphabetIndex = getAlphabetIndex(asciiAlphabet);
        asciiAlphabetArray[i] = changeAlphabet(asciiAlphabet, alphabetIndex);
    }
}

module.exports = problem4;
