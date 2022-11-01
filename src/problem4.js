function problem4(word) {
    const answer_list = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== " " && word[i] === word[i].toUpperCase()) {
            answer_list.push(String.fromCharCode(155 - word.charCodeAt(i)));
        } else if (word[i] !== " " && word[i] === word[i].toLowerCase()) {
            answer_list.push(String.fromCharCode(219 - word.charCodeAt(i)));
        } else {
            answer_list.push(" ");
        }
    }
    answer = answer_list.join("");
    return answer;
}

module.exports = problem4;
