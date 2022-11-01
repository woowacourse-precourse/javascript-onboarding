// 객체를 생성해주는 함수
const makeObject = (str, frogStr) => {
    const obj = {};

    for (let i = 0; i < 26; i++) {
        obj[str[i]] = frogStr[i];
    }

    return obj;
};

function problem4(word) {
    let answer = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const frog = alphabet.split('').reverse().join('');

    // 대문자, 소문자 각각 객체를 만든다.
    const uppercase = makeObject(alphabet, frog);
    const lowercase = makeObject(alphabet.toLowerCase(), frog.toLowerCase());

    for (let x of word) {
        // 객체 내부에 없는  단어에 대한 처리 (ex. 빈문자열, 특수문자)
        if (!uppercase.hasOwnProperty(x) && !lowercase.hasOwnProperty(x)) {
            answer += x;
        } else if (x === x.toLowerCase()) {
            answer += lowercase[x];
        } else if (x === x.toUpperCase()) {
            answer += uppercase[x];
        }
    }
    return answer;
}

module.exports = problem4;
