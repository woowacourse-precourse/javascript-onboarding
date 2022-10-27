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

function problem2(cryptogram) {}

module.exports = problem2;
