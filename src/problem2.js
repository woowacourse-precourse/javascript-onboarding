function problem2(cryptogram) {
    let newCryptogram = [];
    let inLen = cryptogram.length;
    let coLen = newCryptogram.length;

    function skip(cryptogram, newCryptogram) {
        for (let i = 0; i < cryptogram.length; i++) {
            if (cryptogram[i] != cryptogram[i + 1]) newCryptogram.push(cryptogram[i]);
            else i++;
        }
    }

    while (inLen != coLen) {
        skip(cryptogram, newCryptogram);
        coLen = newCryptogram.length
        cryptogram = []
        skip(newCryptogram, cryptogram);
        inLen = cryptogram.length;
        newCryptogram = [];
    }

    return cryptogram.join("");
}

module.exports = problem2;
