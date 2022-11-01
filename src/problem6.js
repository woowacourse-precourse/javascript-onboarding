function getNickName(list) {
    return list.map((info) => {
        const [, nickName] = info;
        return nickName;
    });
}

function checkNameCount(name) {
    let nameList = {};
    name.forEach((nickName) => {
        for (let i = 0; i < nickName.length - 1; i++) {
            const name = nickName.slice(i, i + 2);
            nameList[`${name}`] = (nameList[`${name}`] += 1) || 1;
        }
    });
    return nameList;
}

function getErrorName(obj) {
    return Object.entries(obj)
        .filter(([, count]) => count > 1)
        .map(([name]) => name);
}

function getErrorUserEmail(formList, errorString) {
    return formList
        .filter((info) => {
            for (let i = 0; i < errorString.length; i++) {
                if (info[1].includes(errorString[i])) {
                    return info;
                }
            }
        })
        .map(([email]) => email);
}

function problem6(forms) {
    const userNameCountList = checkNameCount(getNickName(forms));
    const errorNickName = getErrorName(userNameCountList);
    const result = new Set(getErrorUserEmail(forms, errorNickName).sort());
    return [...result];
}

module.exports = problem6;
