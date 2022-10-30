function problem4(cryptogram) {
    let splitted = cryptogram.split("");
    let charCode;

    function cvtCharacter(target) {
        let charCode = target.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(155 - charCode);
        }
        if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(219 - charCode);
        }
        return target;
    }

    const answer = splitted.map((ele) => cvtCharacter(ele));

    return answer.join("");
}

module.exports = problem4;
