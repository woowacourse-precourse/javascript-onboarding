//기능 목록 작성
//1. 친구 리스트를 전부 탐색하면서 user의 친구 리스트를 만든다.
//2. user의 친구 리스트를 돌면서 친구의 친구 리스트를 만든다. 
//3. 친구친구리스트를 [이름,0]의 이차원 배열을 만든다.
//4. 친구친구리스트를 돌면서 이름이 없으면 추천 리스트에 10점을 주며 추가하고, 있으면 점수에 10점만 추가한다.
//5. visitor를 돌면서 친구는 제외하고 이름이 없으면 추천 리스트에 [이름,1]로 추가하고, 있으면 1점을 추가한다.
//6. 점수를 기준으로 sort()해서 5명만 출력한다.

function problem7(user, friends, visitors) {
    var answer;
    var tmpUser = user;
    var tmpFriends = friends;
    var tmpVisitors = visitors;
    var friendArray = [];

    if (tmpUser.length < 1 || tmpUser.length > 30) {
        answer = "User는 1 이상 30 미만이여야 합니다.";
    }

    if (tmpFriends.length < 1 || tmpFriends.length > 10000) {
        answer = "tmpFriends는 1 이상 10000 이하이여야 합니다.";
    }

    if (tmpVisitors.length < 1 || tmpVisitors.length > 10000) {
        answer = "tmpVisitors는 1 이상 10000 이하이여야 합니다.";
    }

    for (let i = 0; i < tmpFriends; i++) {
        if (tmpFriends[i][0] == tmpUser) {
            friendArray.push(tmpFriends[i][1]);
        }
        if (tmpFriends[i][1] == tmpUser) {
            friendArray.push(tmpFriends[i][0]);
        }
    }

    for (let i = 0; i < friendArray.length; i++) {
        for (let j = 0; j < friendArray.length; j++) {
            if (i == j) {
                continue;
            }
        }
    }
    return answer;
}

module.exports = problem7;