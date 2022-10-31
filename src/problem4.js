function problem4(word) {
    let answer = "";
    for (let i = 0; i < word.length; i++) {
        let now = word.charCodeAt(i);
        if (now >= 65 && now <= 90) now = 65 + 90 - now;
        if (now >= 97 && now <= 122) now = 97 + 122 - now;
        answer += String.fromCharCode(now);
    }
    return answer;
}
module.exports = problem4;
