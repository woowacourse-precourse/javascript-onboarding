function getEndIndex(str, startIndex) {
    for (let i = startIndex; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            return i;
        }
    }
}

function getStartIndex(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            return i;
        }
    }
    return -1;
}

function problem2(cryptogram) {
    const start = getStartIndex(cryptogram);
    if (start === -1) {
        return cryptogram;
    }
    const end = getEndIndex(cryptogram, start) + 1;

    const deleteValues = cryptogram.split("").slice(start, end).join("");
    return problem2(cryptogram.replace(deleteValues, ""));
}

module.exports = problem2;
