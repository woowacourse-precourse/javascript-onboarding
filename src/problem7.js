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

function problem7(user, friends, visitors) {}

module.exports = problem7;
