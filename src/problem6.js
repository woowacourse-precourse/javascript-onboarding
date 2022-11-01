function problem6(forms) {
    return resultSort(forms);
}

function reduplicationCheck(forms) {
    let result = [];
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < forms[i][1].length - 1; j++) {
            for (let k = i + 1; k < forms.length; k++) {
                if (forms[k][1].includes(forms[i][1].slice(j, j + 2))) {
                    result.push(forms[i][0]);
                    result.push(forms[k][0]);
                }
            }
        }
    }
    return result;
}

function resultSort(forms) {
    let resultSet = new Set(reduplicationCheck(forms));
    return [...resultSet].sort();
}

module.exports = problem6;