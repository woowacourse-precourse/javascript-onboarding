/*
 기능 목록 
  1) 문자열에 중복문자가 있는지 암호 해독하고 새로운 문자열 만들어주기
  2) 원래 문자와 중복문자 확인 후 문자가 같은지 다른지 확인

*/

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
        if (s === prev) return s
    }
}

function problem2(cryptogram) {
    var answer
    answer = getStr(cryptogram)
    return answer
}

module.exports = problem2
