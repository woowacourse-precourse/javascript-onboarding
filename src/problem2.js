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

function deleteStr(str) {
    const start = getStartIndex(str);
    if (start === -1) {
        return str;
    }
    const end = getEndIndex(str, start) + 1;

    const dStr = str.split("").slice(start, end).join("");
    return str.replace(dStr, "");
}

function problem2(cryptogram) {}

module.exports = problem2;
