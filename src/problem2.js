function problem2(cryptogram) {
    let answer = cryptogram;
    let isDuplicate = false;
    do {
        isDuplicate = false;
        let n = answer.length;
        let next = "";
        let i = 0;
        for (; i < n - 1; i++) {
            if (answer[i] === answer[i + 1]) {
                i++;
                isDuplicate = true;
            } else next += answer[i];
        }
        if (i === n - 1) next += answer[n - 1];
        answer = next;
    } while (isDuplicate);
    return answer;
}
module.exports = problem2;
