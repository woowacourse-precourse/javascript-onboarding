function problem6(forms) {
    let answer = [];
    let length = forms.length;
    for (let i = 0; i < length; i++) {
        let name = forms[i][1];
        for (let j = 0; j < name.length - 1; j++) {
            let twoChar = name[j] + name[j + 1];
            for (let k = i + 1; k < length; k++) {
                if (forms[k][1].includes(twoChar))
                    answer.push(forms[i][0], forms[k][0]);
            }
        }
    }
    answer = [...new Set(answer)].sort();
    return answer;
}

module.exports = problem6;
