function problem2(cryptogram) {
    var answer;
    // 1. 연속된 중복 문자가 있는 지 확인
    // - 중복된 문자가 있다면 true, 없다면 false 반환
    function checkText(text) {
        let textArray = text.split("");
        let result = false;
        let idx = 0;
        while (result === false && idx < textArray.length) {
            if (textArray[idx] === textArray[idx + 1]) {
                result = true;
            } else {
                ++idx;
            }
        }
        return result;
    }

    // 2. 있다면 모두 없어질 때까지 제거
    // 3. 없다면 반환
    return answer;
}

module.exports = problem2;
