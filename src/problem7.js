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

    // 2단계) 점수 카운트 조건에 유효한 친구관계만 남기기
    const connection = friends.filter((el) => el[0] !== user && el[1] !== user);
    for (let i = 0; i < connection.length; i++) {
        if (myFriends.includes(connection[i][0]) && myFriends.includes(connection[i][1])) {
            connection.splice(i, 1);
        } else if (!myFriends.includes(connection[i][0]) && !myFriends.includes(connection[i][1])) {
            connection.splice(i, 1);
        }
    }
}

module.exports = problem7;
