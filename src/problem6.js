function problem6(forms) {
    const answer_list = [];
    for (let i = 0; i < forms.length; i++) {
        if (forms[i][1].length === 0) {
            continue;
        } else {
            for (let j = 0; j < forms.length; j++)
                for (let k = 0; k < forms[i][1].length - 1; k++) {
                    if (forms[j][1] !== forms[i][1]) {
                        if (forms[j][1].includes(forms[i][1].slice(k, k + 2))) {
                            if (answer_list.includes(forms[j][1])) {
                                break;
                            } else {
                                answer_list.push(forms[j][0]);
                                break;
                            }
                        }
                    }
                }
        }
    }
    const set = new Set(answer_list);
    const answer = [...set];
    answer.sort();
    return answer;
}

module.exports = problem6;
