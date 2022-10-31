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
    return answer;
}

module.exports = problem4;
