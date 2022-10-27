function problem2(cryptogram) {
    let str = cryptogram;
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < str.length; j++) {
            str = str.replace(/(.)\1+/g, '');
        }
    }
    return str;
}

module.exports = problem2;
