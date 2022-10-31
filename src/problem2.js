function problem2(cryptogram) {
    var answer;
    let text = cryptogram.split("");
    // 1. 연속된 중복 문자가 있는 지 확인
    // - 중복된 문자가 있다면 true, 없다면 false 반환
    function checkText(text) {
        let textArray = text.slice();
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
    while (checkText(text) === true) {
        let textArray = [];
        for (let i = 0; i < text.length; i++) {
            let prevLetter = text[i - 1];
            let letter = text[i];
            let nextLetter = text[i + 1];
            if (i === 0) {
                letter !== nextLetter ? textArray.push(letter) : null;
            } else if (letter !== text[i + 1] && letter !== prevLetter) {
                textArray.push(letter);
            }
        }
        text = textArray;
    }

    // 3. 없다면 반환
    answer = text.join("");
    return answer;
}

module.exports = problem2;
