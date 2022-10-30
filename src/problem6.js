function getNickName(list) {
    return list.map((info) => {
        const [, nickName] = info;
        return nickName;
    });
}

function checkNameCount(name) {
    let nameList = {};
    name.forEach((na) => {
        for (let i = 0; i < na.length - 1; i++) {
            const name = na.slice(i, i + 2);
            nameList[`${name}`] = (nameList[`${name}`] += 1) || 1;
        }
    });
    return nameList;
}

function problem6(forms) {}

module.exports = problem6;
