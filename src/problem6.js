function problem6(forms) {
    let length = forms.length;
    let answer = [];
    for (let i = 0; i < length - 1; i++) {
        let name = forms[i][1];
        let pushed = false;
        let count = 0;
        for (let j = i + 1; j < length; j++) {
            let compName = forms[j][1];
            for (let k = 0; k < name.length - 1; k++) {
                let twoChar = name[k] + name[k + 1];
                if (compName.includes(twoChar)) {
                    !pushed && answer.push(forms[i][0]);
                    answer.push(forms[j][0]);
                    pushed = true;
                    count == 0 ? (count += 2) : count++;
                }
            }
        }
        length -= count;
    }
    answer = answer.sort((a, b) => b[0].length - a[0].length);
    return answer;
}

module.exports = problem6;
