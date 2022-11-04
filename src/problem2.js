const continuityStr = /([a-z])\1{1,}/g;

function updateStr(str) {
    return str.replace(continuityStr, "");
}

function problem2(cryptogram) {
    if (!continuityStr.test(cryptogram)) {
        return cryptogram;
    }
    return problem2(updateStr(cryptogram));
}

module.exports = problem2;
