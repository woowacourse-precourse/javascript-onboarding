function problem7(user, friends, visitors) {
    var answer;
    return answer;
}


function friendCheck(user, friends) {
    let userFriends = [];
    friends.forEach(friendship => {
        if (friendship.includes(user)) {
            const friend = friendship.filter(people => people != user).join();
            userFriends.push(friend);
        }
    })
    return userFriends;
}

module.exports = problem7;