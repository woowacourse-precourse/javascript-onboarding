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

    return answer;
}

module.exports = problem7;
