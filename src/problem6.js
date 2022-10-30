function problem6(forms) {
    let matchTable = new Set();

    forms.forEach(([_, nickname]) => {
        for (let i = 0; i < nickname.length - 1; i++) {
            matchTable.add(nickname[i] + nickname[i + 1]);
        }
    });

    let result = new Set();
    matchTable.forEach((matchItem) => {
        let repeatNickname = forms.filter(([_, nickname]) => nickname.indexOf(matchItem) > -1);

        if (repeatNickname.length > 1) {
            result.add(repeatNickname.map(([email, _]) => email.split('@')[0]));
        }
    });

    return [...result.values()]
        .flat()
        .sort()
        .map((email) => `${email}@email.com`);
}

module.exports = problem6;
