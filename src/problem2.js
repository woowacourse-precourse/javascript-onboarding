function problem2(cryptogram) {
    var answer;
    return answer;
}

function delDuplication(crypto) {
    let str = '';
    for (let i = 0; i < crypto.length; i++) {
        if (crypto[i] !== crypto[i + 1] && (crypto[i - 1] !== crypto[i])) {
            str += crypto[i];
        }
    }
    return str;
}

module.exports = problem2;