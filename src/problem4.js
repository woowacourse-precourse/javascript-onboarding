function isAlphabet(str) {
    return /[a-zA-Z]/.test(str);
}

function problem4(word) {
    if (word < 1 || 1000 < word) return -1;
    let answer = word;
    let alp = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < answer.length; i++) {
        let char = answer[i];
        if (char !== " " && isAlphabet(char)) {
            answer[i].toUpperCase() === char
                ? (char =
                      alp[25 - alp.indexOf(char.toLowerCase())].toUpperCase())
                : (char = alp[25 - alp.indexOf(char)]);
            answer =
                answer.substring(0, i) +
                char +
                answer.substring(i + 1, answer.length);
        }
    }
    return answer;
}

console.log(problem4("I love you"));
console.log(problem4("I LOVE YOU"));
module.exports = problem4;
