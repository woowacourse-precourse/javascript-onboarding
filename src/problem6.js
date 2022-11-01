function problem6(forms) {
    let emailSet = new Set();
    let dictionary = [];

    function checkRepeatition(nickname) {
        let result = false;
        dictionary.forEach(([str, i]) => {
            if (nickname.indexOf(str) > -1) {
                emailSet.add(forms[i][0]);
                result = true;
            }
        });
        return result;
    }

    forms.forEach(([email, nickname], i) => {
        if (checkRepeatition(nickname)) emailSet.add(email);

        for (let k = 0; k < nickname.length - 1; k++) {
            dictionary.push([nickname.slice(k, k + 2), i]);
        }
    });

    let answer = Array.from(emailSet).sort();

    return answer;
}

module.exports = problem6;
