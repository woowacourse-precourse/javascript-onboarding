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

    const uppercase = makeObject(alphabet, frog);
    const lowercase = makeObject(alphabet.toLowerCase(), frog.toLowerCase());

    for (let x of word) {
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
