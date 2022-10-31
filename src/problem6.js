function problem6(forms) {
    const email = forms.map((el) => el[0]);
    const nickName = forms.map((el) => el[1]);
    const array = new Array();

    for (let i = 0; i < forms.length; i++) {
        const collection = new Array();
        for (let j = 0; j <= nickName[i].split('').length - 2; j++) {
            for (let k = j + 2; k <= nickName[i].split('').length; k++) {
                collection.push(nickName[i].split('').slice(j, k));
            }
        }
        array.push(collection);
    }

    const compare = new Array();
    for (let i = 0; i < forms.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = i + 1; k < forms.length; k++) {
                for (let l = 0; l < array[k].length; l++) {
                    if (
                        JSON.stringify(array[i][j]) ===
                        JSON.stringify(array[k][l])
                    ) {
                        compare.push(array[i][j]);
                    }
                }
            }
        }
    }

    const duplicate = compare.filter((element, index) => {
        return (
            JSON.stringify(compare).indexOf(JSON.stringify(element)) === index
        );
    });

    const index = new Array();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < duplicate.length; j++) {
            if (
                JSON.stringify(array[i]).includes(JSON.stringify(duplicate[j]))
            ) {
                index.push(i);
            }
        }
    }

    const duplicateEmail = new Array();
    for (let i = 0; i < index.length; i++) {
        duplicateEmail.push(email[index[i]]);
    }

    const answer = duplicateEmail.sort();

    return answer;
}

module.exports = problem6;
