function problem7(user, friends, visitors) {
    // 1단계) user와 친구인 배열만을 담은 myFriends 배열생성
    const myFriends = [];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i][1].includes(user)) {
            myFriends.push(friends[i][0]);
        }
        if (friends[i][0].includes(user)) {
            myFriends.push(friends[i][1]);
        }
    }
}

module.exports = problem7;
