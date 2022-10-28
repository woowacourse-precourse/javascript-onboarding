const alphabet = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
};

function getOppositeAlphabet(word) {
    const codeNumber = word.charCodeAt();

    if (codeNumber >= 65 && codeNumber <= 90) {
        return alphabet[word.toLowerCase()].toUpperCase();
    }
    if (codeNumber >= 97 && codeNumber <= 121) {
        return alphabet[word];
    }

    return word;
}

function problem4(word) {
    let answer = "";
    for (let value of word) {
        answer += getOppositeAlphabet(value);
    }
    return answer;
}

module.exports = problem4;
