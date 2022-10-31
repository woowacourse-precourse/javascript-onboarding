function problem4(word) {
    let dictObject = {
        A: 'Z',
        B: 'Y',
        C: 'X',
        D: 'W',
        E: 'V',
        F: 'U',
        G: 'T',
        H: 'S',
        I: 'R',
        J: 'Q',
        K: 'P',
        L: 'O',
        M: 'N',
        N: 'M',
        O: 'L',
        P: 'K',
        Q: 'J',
        R: 'I',
        S: 'H',
        T: 'G',
        U: 'F',
        V: 'E',
        W: 'D',
        X: 'C',
        Y: 'B',
        Z: 'A',
        a: 'z',
        b: 'y',
        c: 'x',
        d: 'w',
        e: 'v',
        f: 'u',
        g: 't',
        h: 's',
        i: 'r',
        j: 'q',
        k: 'p',
        l: 'o',
        m: 'n',
        n: 'm',
        o: 'l',
        p: 'k',
        q: 'j',
        r: 'i',
        s: 'h',
        t: 'g',
        u: 'f',
        v: 'e',
        w: 'd',
        x: 'c',
        y: 'b',
        z: 'a',
    };
    const array = word.split('');
    let stack = [];
    let keyBox = JSON.stringify(Object.keys(dictObject));
    for (let i = 0; i <= word.length; i++) {
        let findKeys = Object.keys(dictObject).filter(function (a) {
            return a.indexOf(array[i]) > -1;
        });
        if (array[i] === ' ') {
            stack.push(' ');
        }
        if (keyBox.includes(array[i])) {
            stack.push(dictObject[findKeys]);
        }
    }
    var answer = stack.toString().replace(/,/g, '');
    return answer;
}

module.exports = problem4;
