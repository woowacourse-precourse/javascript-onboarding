function problem6(forms) {
    var answer;
    const nickNameArr = forms.map((el) => el[1]);
    const emailArr = forms.map((el) => el[0]);

    let duplicated;
    let duplicatedMemberNames = [];

    for (let i = 0; i < nickNameArr.length; i++) {
        for (j = 0; j < nickNameArr[i].length - 1; j++) {
            duplicated = nickNameArr.filter((el) =>
                el.includes(nickNameArr[i][j] + nickNameArr[i][j + 1])
            );
            console.log(duplicated);
            if (duplicated.length > 1) {
                duplicatedMemberNames.push(...duplicated);
            }
            console.log(duplicatedMemberNames);
        }

        const set = new Set(duplicatedMemberNames);
        const filtered = [...set];
        const indexArr = filtered.map((el) => nickNameArr.indexOf(el));
        answer = indexArr
            .map((el) => emailArr[el])
            .sort((a, b) => (a < b ? -1 : a == b ? 0 : 1));
    }

    return answer;
}

module.exports = problem6;
