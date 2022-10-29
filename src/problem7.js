function problem7(user, friends, visitors) {
    var answer;
    return answer;
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
    return visitorNotFriends;
}

module.exports = problem7;