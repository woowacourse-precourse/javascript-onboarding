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

    // 3단계) 조건에 유효한 친구관계 또는 방문자의 점수를 기록할 객체 생성
    const scores = {};
    for (let i = 0; i < connection.length; i++) {
        if (myFriends.includes(connection[i][0])) {
            scores[connection[i][1]] = 0;
        }
        if (myFriends.includes(connection[i][1])) {
            scores[connection[i][0]] = 0;
        }
    }
    for (let i = 0; i < visitors.length; i++) {
        if (!myFriends.includes(visitors[i])) {
            scores[visitors[i]] = 0;
        }
    }

    // 4단계) 점수를 카운트 하기 전 미리 이름 순으로 정렬
    const orderedScoresArray = Object.entries(scores).sort();
    const orderedScoresObject = Object.fromEntries(orderedScoresArray);

    // 5단계) 규칙에 따라 점수 기록
    for (let i = 0; i < connection.length; i++) {
        if (myFriends.includes(connection[i][0])) {
            orderedScoresObject[connection[i][1]] += 10;
        }
        if (myFriends.includes(connection[i][1])) {
            orderedScoresObject[connection[i][0]] += 10;
        }
    }
    for (let i = 0; i < visitors.length; i++) {
        if (!myFriends.includes(visitors[i])) {
            orderedScoresObject[visitors[i]] += 1;
        }
    }

    // 6단계) 점수가 가장 높은 순으로 정렬
    const orderedArray = Object.entries(orderedScoresObject).sort((a, b) => b[1] - a[1]);

    // 7단계) 형식에 맞게 배열로 변환하여 결과를 반환
    const result = orderedArray.map((el) => el[0]);
    return result;
}

module.exports = problem7;
