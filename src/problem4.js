function problem4(word) {
    let answer = [];
    let map = new Map();
    let alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alpRev = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";
    for (let i = 0; i < 52; i++) {
        map.set(alp[i], alpRev[i]);
    }
    for (let j = 0; j < word.length; j++) {
        if (map.has(word[j])) answer.push(map.get(word[j]));
        else answer.push(word[j]);
    }

    return answer.join("");
}

module.exports = problem4;
