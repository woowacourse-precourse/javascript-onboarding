function problem6(forms) {
    let matchTable = new Set();

    forms.forEach(([_, nickname]) => {
        for (let i = 0; i < nickname.length - 1; i++) {
            matchTable.add(nickname[i] + nickname[i + 1]);
        }
    });

    let result = [];
    [...matchTable.values()].forEach((item) => {
        let repeatitionNickname = forms.filter(([_, nickname]) => nickname.indexOf(item) > -1);

        if (repeatitionNickname.length > 1) {
            result.push(repeatitionNickname.map((item) => item[0]));
        }
    });

    result = result
        .flat()
        .map((item) => item.split('@')[0])
        .sort()
        .map((item) => item + '@email.com');
    console.log(result);

    // console.log(matchTable);
}

problem6(
    [
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
    ],
    ['jason@email.com', 'jm@email.com', 'mj@email.com']
);

module.exports = problem6;
