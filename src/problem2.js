function decodeString(s) {
    let newString = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1] && s[i] !== s[i - 1]) {
            newString += s[i]
        }
    }
    return newString
}

function getStr(s) {
    let prev = ''
    while (1) {
        prev = s
        s = decodeString(s)
        console.log(s)
        if (s === prev) return s
    }
}

function problem2(cryptogram) {
    var answer
    answer = getStr(cryptogram)
    return answer
}

module.exports = problem2
