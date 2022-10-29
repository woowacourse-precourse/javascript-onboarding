function problem7(user, friends, visitors) {
    var answer;

    // 1. 친구 추천 후보 목록 만들기
    // - 전체 친구 목록에서 user와 이미 친구인 사람 제외
    // - 친구의 친구 목록에서 user 제외

    let userFriends = new Set();
    let otherFriends = new Set();
    friends.forEach((friend) => {
        userFriends.add(friend[0]);
        if (friend[1] !== user) {
            otherFriends.add(friend[1]);
        }
    });
    visitors.forEach((friend) => {
        if (userFriends.has(friend) === false) {
            otherFriends.add(friend);
        }
    });

    // 2. 친구 추천 후보 목록 정렬

    otherFriends = new Array(...otherFriends).sort();

    // 3. Map으로 바꿔서 각 친구별로 점수 기록

    let otherFriendsMap = new Map();
    otherFriends.forEach((friend) => otherFriendsMap.set(friend, 0));

    friends.forEach((friend) => {
        if (otherFriendsMap.has(friend[1])) {
            otherFriendsMap.set(friend[1], otherFriendsMap.get(friend[1]) + 10);
        }
    });

    visitors.forEach((friend) => {
        if (otherFriendsMap.has(friend)) {
            otherFriendsMap.set(friend, otherFriendsMap.get(friend) + 1);
        }
    });

    // 4. 점수가 큰 순서로 정렬 후 0점 제외한 최대 5명 구하기
    let otherFriendsList = new Array(...otherFriendsMap).sort(
        (x, y) => y[1] - x[1]
    );

    otherFriendsList = otherFriendsList.filter((friend) => friend[1] !== 0);

    answer = otherFriendsList.map((friend) => friend[0]);
    answer = answer.slice(0, 5);

    return answer;
}

module.exports = problem7;
