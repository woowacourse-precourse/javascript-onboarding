function problem7(user, friends, visitors) {
    let friendGraph = {};
    friends.forEach(([friendA, friendB]) => {
        friendGraph[friendA] = [...(friendGraph[friendA] || ''), friendB];
        friendGraph[friendB] = [...(friendGraph[friendB] || ''), friendA];
    });

    let weightGraph = {};
    friendGraph[user].forEach((userFriend) => {
        friendGraph[userFriend]
            .filter((friend) => friend !== user)
            .forEach((friend) => {
                weightGraph[friend] = (weightGraph[friend] || 0) + 10;
            });
    });

    visitors.forEach((visitor) => {
        if (!friendGraph[user].includes(visitor)) {
            weightGraph[visitor] = (weightGraph[visitor] || 0) + 1;
        }
    });

    return Object.entries(weightGraph)
        .filter(([_, weight]) => weight !== 0)
        .sort(([nameA, weightA], [nameB, weightB]) => {
            if (weightA === weightB) {
                if (nameA > nameB) return 1;
                if (nameA < nameB) return -1;
            } else {
                return weightB - weightA;
            }
        })
        .slice(0, 5)
        .map(([name, _]) => name);
}

module.exports = problem7;
