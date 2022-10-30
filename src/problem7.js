function problem7(user, friends, visitors) {
    const friendRelationDic = {};
    const scoreStorageDic = {};
    const result = [];
    for (let i = 0; i < friends.length; i++) {
        const friendA = friends[i][0];
        const friendB = friends[i][1];
        makeFriend(friendA, friendB);
        makeFriend(friendB, friendA);
    }

    function makeFriend(friendA, friendB) {
        if (friendA in friendRelationDic === false) {
            friendRelationDic[friendA] = [friendB];
        } else {
            friendRelationDic[friendA].push(friendB);
        }
    }
    const userFriends = friendRelationDic[user];

    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i] in scoreStorageDic === false) {
            scoreStorageDic[visitors[i]] = 1;
            continue;
        }
        scoreStorageDic[visitors[i]] += 1;
    }
    for (let i = 0; i < userFriends.length; i++) {
        if (userFriends[i] in scoreStorageDic === true) {
            delete scoreStorageDic[userFriends[i]];
        }
        const friendsFriendGroup = friendRelationDic[userFriends[i]];
        for (let j = 0; j < friendsFriendGroup.length; j++) {
            const friendsFriendIndividual = friendsFriendGroup[j];
            if (friendsFriendIndividual in scoreStorageDic === false) {
                scoreStorageDic[friendsFriendIndividual] = 10;
                continue;
            }
            scoreStorageDic[friendsFriendIndividual] += 10;
        }
    }
    if (user in scoreStorageDic === true) {
        delete scoreStorageDic[user];
    }

    let a = [];
    for (let number in scoreStorageDic) {
        a.push([number, scoreStorageDic[number]]);
    }
    a.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        let numA = a[1];
        let numB = b[1];

        if (numA > numB) return -1;
        if (numA < numB) return 1;
        if (nameA > nameB) return 1;
        if (nameA < nameB) return -1;
        return 0;
    });

    for (let i = 0; i < a.length; i++) {
        result.push(a[i][0]);
    }
    return result;
}

module.exports = problem7;
