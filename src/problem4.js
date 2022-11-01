function problem4(word) {
    let answer = word;
    let alp = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < answer.length; i++) {
        let char = answer[i];
        if (char !== " ") {
            answer[i].toUpperCase() === char
                ? (char =
                      alp[
                          26 - alp.indexOf(char.toLowerCase()) - 1
                      ]).toUpperCase()
                : (char = alp[26 - alp.indexOf(char) - 1]);

            answer =
                answer.substring(0, i) +
                char +
                answer.substring(i + 1, answer.length);
        }
    }
    return answer;
}

module.exports = problem4;
