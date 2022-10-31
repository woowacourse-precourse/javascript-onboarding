function getUserFriend(user, friendList) {
    return friendList
        .filter((item) => item.includes(user))
        .map(([user1, user2]) => (user1 === user ? user2 : user1))
        .reduce((acc, cur) => {
            acc[cur] = [];
            return acc;
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
    const userScore = {};
    userList.forEach(
        (user) => (userScore[user] = (userScore[user] += 10) || 10)
    );

    return userScore;
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
    const result = Object.keys(resultObj).sort((a, b) => {
        if (resultObj[a] > resultObj[b]) return -1;
        if (resultObj[a] < resultObj[b]) return 1;
        if (a > b) return 1;
        if (a < b) return -1;
    });
    return result.slice(0, 5);
}

function problem7(user, friends, visitors) {}

module.exports = problem7;
