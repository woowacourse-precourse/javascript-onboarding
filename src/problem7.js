function problem7(user, friends, visitors) {
    var answer;
    let friendsList = [];
    let friendsOfFriends = [];
    let friendsScore = {};
    //user 의 친구 확인
    for (let i = 0; i < friends.length; i++) {
        if (friends[i][0] === user) {
            friendsList.push(friends[i][1]);
        } else if (friends[i][1] === user) {
            friendsList.push(friends[i][0]);
        }
    }
    for (let i = 0; i < friends.flat().length; i++) {
        for (let j = 0; j < friendsList.length; j++) {
            if (friends.flat()[i] === friendsList[j]) {
                if (i % 2 === 0) {
                    if (friends.flat()[i + 1] !== user)
                        friendsOfFriends.push(friends.flat()[i + 1]);
                } else {
                    if (friends.flat()[i - 1] !== user)
                        friendsOfFriends.push(friends.flat()[i - 1]);
                }
            }
        }
    }
    let scoreList = [];
    let setFriends = new Set(friendsOfFriends);
    let duplicateFriends = [...setFriends];

    let countVisitors = [];
    for (let i = 0; i < visitors.length; i++) {
        if (friends.flat().includes(visitors[i]) === false) {
            countVisitors.push(visitors[i]);
        }
    }
    let setVisitors = new Set(countVisitors);
    let duplicateVisitors = [...setVisitors];
    let friendsAndVisitors = duplicateFriends.concat(duplicateVisitors);
    let score10List = [];
    let score1List = [];

    for (let i = 0; i < friendsAndVisitors.length; i++) {
        scoreList.push(0);
    }
    for (let i = 0; i < duplicateFriends.length; i++) {
        score10List.push(0);
    }
    for (let i = 0; i < duplicateVisitors.length; i++) {
        score1List.push(0);
    }

    for (let i = 0; i < friendsOfFriends.length; i++) {
        for (let j = 0; j < duplicateFriends.length; j++) {
            if (friendsOfFriends[i] === duplicateFriends[j]) {
                score10List[j] += 10;
            }
        }
    }
    for (let i = 0; i < visitors.length; i++) {
        for (let j = 0; j < duplicateVisitors.length; j++) {
            if (visitors[i] === duplicateVisitors[j]) {
                score1List[j] += 1;
            }
        }
    }
    scoreList = score10List.concat(score1List);

    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    let finalScoreList = zip(friendsAndVisitors, scoreList);

    let sortFinal = [];

    for (let i = 0; i < finalScoreList.sort(compareSecondColumn).length; i++) {
        sortFinal.push(finalScoreList.sort(compareSecondColumn)[i][0]);
    }
    return sortFinal;
}

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        if (a[0] === a[0]) {
            return 0;
        } else {
            return a[0] > b[0] ? -1 : 1;
        }
    } else {
        return a[1] > b[1] ? -1 : 1;
    }
}
module.exports = problem7;
