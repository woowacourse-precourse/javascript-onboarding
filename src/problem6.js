function problem6(forms) {
    const nicknameObject = {};
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < forms[i][1].length - 1; j++) {
            let pattern = forms[i][1][j] + forms[i][1][j + 1];
            nicknameObject[pattern] = 0;
        }
    }
    const nicknameArray = Object.keys(nicknameObject);
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < nicknameArray.length; j++) {
            if (forms[i][1].includes(nicknameArray[j])) {
                nicknameObject[nicknameArray[j]] += 1;
            }
        }
    }

    const countArray = Object.entries(nicknameObject);
    const duplicationArray = countArray.filter((el) => el[1] > 1);

    const resultArray = [];
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < duplicationArray.length; j++) {
            if (forms[i][1].includes(duplicationArray[j][0])) {
                resultArray.push(forms[i][0]);
            }
        }
    }

    const orderedResult = new Set([...resultArray]);
    const removedArray = [...orderedResult].sort();
    return removedArray;
}

module.exports = problem6;
