function decodeString(s) {
    let newString = ''
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            if (s[i] !== s[i - 1]) newString += s[i]
            continue
        }
        if (s[i] !== s[i + 1]) {
            newString += s[i]
        }
    }
    return newString
}

function problem2(cryptogram) {
    var answer
    return answer
}

module.exports = problem2
