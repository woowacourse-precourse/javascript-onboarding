function problem4(word) {
    let arrCharCode = [];

    for (let i = 0; i < word.length; i++) {
        arrCharCode.push(word.charCodeAt(i));

        if (arrCharCode[i] >= 65 && arrCharCode[i] <= 90) {
            arrCharCode[i] = 155 - arrCharCode[i];
        } else if (arrCharCode[i] >= 97 && arrCharCode[i] <= 122) {
            arrCharCode[i] = 219 - arrCharCode[i];
        }
    }

    const answer = changeCharCode(arrCharCode).join('');

    return answer;
}

function changeCharCode(arrCharCode) {
    return arrCharCode.map((el) => String.fromCharCode(el));
}

module.exports = problem4;
