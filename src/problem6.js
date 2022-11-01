function problem6(forms) {
    var answer = new Set();

    for (let i = 0; i < forms.length; i++) {
        let nickName = forms[i][1];
        for (let j = 2; j <= nickName.length; j++) {
            for (let k = 0; k <= nickName.length - j; k++) {
                let extractWord = nickName.substring(k, k + j);
                checkDuplicate(forms, extractWord, i, answer);
            }
        }
    }

    return sortArray(answer);
}

function sortArray(answer) {
    return Array.from(answer).sort();
}

function checkDuplicate(forms, checkWord, index, answer) {
    for (let i = 0; i < forms.length; i++) {
        if (i === index) continue;
        else {
            if (forms[i][1].includes(checkWord)) {
                answer.add(forms[i][0]);
            }
        }
    }
}
module.exports = problem6;
