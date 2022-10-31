function problem6(forms) {
    let answer = [];
    let list = [];
    let duplicateList = [];
    const push = (str) => {
        let len = str.length;
        for (let i = 0; i < len - 1; i++) {
            let now = str.slice(i, i + 2);
            if (list.indexOf(now) === -1) list.push(now);
            else if (duplicateList.indexOf(now) === -1) duplicateList.push(now);
        }
    };
    const check = (str) => {
        for (let i = 0; i < str.length - 1; i++)
            if (duplicateList.indexOf(str.slice(i, i + 2)) >= 0) return true;
        return false;
    };
    for (let i in forms) push(forms[i][1]);
    for (let i in forms) if (check(forms[i][1])) answer.push(forms[i][0]);
    answer.sort();
    return answer;
}
module.exports = problem6;
