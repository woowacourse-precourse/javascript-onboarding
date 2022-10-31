function problem4(word) {
    let splittedWord = word.split("");
    let charCode;

    function convertCharacter(target) {
        let charCode = target.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(155 - charCode);
        }
        if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(219 - charCode);
        }
        return target;
    }

    const answer = splittedWord.map((ele) => convertCharacter(ele));

    return answer.join("");
}

module.exports = problem4;
