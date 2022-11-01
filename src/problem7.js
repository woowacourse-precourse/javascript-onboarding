function getUserFriend(user, friendList) {
    return friendList
        .filter((item) => item.includes(user))
        .map(([user1, user2]) => (user1 === user ? user2 : user1))
        .reduce((obj, friend) => {
            obj[friend] = [];
            return obj;
        }, {});
}

function exceptUserList(user, friendList) {
    return friendList.filter((name) => !name.includes(user));
}

function getFriendOfFriend(friendObj, notUserFriendList) {
    return notUserFriendList
        .filter(
            ([user1, user2]) =>
                !(user1 in friendObj && user2 in friendObj) &&
                (user1 in friendObj || user2 in friendObj)
        )
        .map(([user1, user2]) => (user1 in friendObj ? user2 : user1));
}

function addFriendOfFriendScore(userList) {
    return userList.reduce((obj, user) => {
        obj[user] = (obj[user] += 10) || 10;
        return obj;
    }, {});
}

function addVisitorsScore(ScoreObj, visitorList, userFriendList) {
    visitorList.forEach((user) => {
        if (user in userFriendList) {
            return;
        }
        ScoreObj[user] = (ScoreObj[user] += 1) || 1;
    });
    return ScoreObj;
}

function getResult(resultObj) {
    return Object.keys(resultObj)
        .sort((a, b) => {
            if (resultObj[a] > resultObj[b]) return -1;
            if (resultObj[a] < resultObj[b]) return 1;
            if (a > b) return 1;
            if (a < b) return -1;
        })
        .slice(0, 5);
}

function problem7(user, friends, visitors) {
    const userFriendObj = getUserFriend(user, friends);
    const newFriendList = exceptUserList(user, friends);
    const friendScoreObj = addFriendOfFriendScore(
        getFriendOfFriend(userFriendObj, newFriendList)
    );
    const resultScore = addVisitorsScore(
        friendScoreObj,
        visitors,
        userFriendObj
    );
    return getResult(resultScore);
}
module.exports = problem7;
