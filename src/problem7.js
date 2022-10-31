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

function problem7(user, friends, visitors) {}

module.exports = problem7;
