function problem7(user, friends, visitors) {
    return upToFivePeople(user, friends, visitors);
}

function friendCheck(user, friends, visitors) {
    let userFriends = [];
    friends.forEach(friendship => {
        if (friendship.includes(user)) {
            const friend = friendship.filter(people => people != user).join();
            userFriends.push(friend);
        }
    })
    return userFriends;
}

function acquaintanceCheck(user, friends, visitors) {
    let acquaintance = [];
    friendCheck(user, friends, visitors).forEach(friend => {
        friends.forEach(friendship => {
            if (friendship.includes(friend)) {
                acquaintance.push(friendship.filter(people => people !== friend).join());
            }
        })
    })
    acquaintance = acquaintance.filter(people => people !== user);
    acquaintance = acquaintance.filter(people => !friendCheck(user, friends, visitors).includes(people));
    return acquaintance;
}

function visitorCheck(user, friends, visitors) {
    const visitorNotFriends = visitors.filter(people => !friendCheck(user, friends, visitors).includes(people));
    const visitorNotUser = visitorNotFriends.filter(people => people !== user);
    return visitorNotUser;
}

function recomendScore(user, friends, visitors) {
    const acquaintanceScore = acquaintanceCheck(user, friends, visitors).reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 10);
        return acc;
    }, new Map());
    const totalScore = visitorCheck(user, friends, visitors).reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
        return acc;
    }, acquaintanceScore);
    return [...totalScore];
}

function recomendScoreSort(user, friends, visitors) {
    const scoreSort = recomendScore(user, friends, visitors).sort((a, b) => {
        if (a[1] === b[1]) return sameScoreSort(a, b);
        else if (a[1] > b[1]) return -1;
        else return 1;
    })
    return scoreSort;
}

function sameScoreSort(a, b) {
    if (a[0] > b[0]) {
        return 1;
    } else {
        return -1;
    }
}

function upToFivePeople(user, friends, visitors) {
    const scoreMap = new Map(recomendScoreSort(user, friends, visitors));
    return [...scoreMap.keys()].slice(0, 5);
}

module.exports = problem7;