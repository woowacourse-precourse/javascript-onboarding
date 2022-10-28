function problem6(forms) {
    var answer = nameOverlapCheck(forms);
    return answer;
}

function nameOverlapCheck(forms) {
    let result = [];
    for (let i = 0; i < forms.length - 1; i++) {
        for (let j = 0; j < forms[i][1].length - 1; j++) {
            for (let k = i + 1; k < forms.length; k++) {
                if (forms[k][1].includes(forms[i][1].slice(j, j + 2))) {
                    result.push(forms[i][0]);
                    result.push(forms[k][0]);
                }
            }
        }
    }
    let resultSet = new Set(result);
    return [...resultSet].sort();
}
// const forms = [
//     ["jm@email.com", "원피스"],
//     ["jason@email.com", "제이슨"],
//     ["woniee@email.com", "원피수"],
//     ["mj@email.com", "엠제이"],
//     ["nowm@email.com", "수원피"]
// ];
// console.log(a(forms));
module.exports = problem6;