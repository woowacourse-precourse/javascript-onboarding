function problem7(user, friends, visitors) {
    let friendsList = [
        ...makeFriendsList(user, friends),
        ...makeVisitorsList(visitors, friends),
    ];
    calcAcquaintance(friends, friendsList);
    calcVisitors(visitors, friendsList);

    for (let i = 0; i < friendsList.length; i++) {
        friendsList[i].push(friendsList[i][1] * 10 + friendsList[i][2] * 1);
    }

    const sortList = friendsList.sort((a, b) => {
        return b[3] - a[3];
    });
    let answer = new Array();
    for (let i = 0; i < sortList.length; i++) {
        answer.push(sortList[i][0]);
    }

    return answer;
}

function makeFriendsList(user, friends) {
    const info = new Array();

    for (let i = 0; i < friends.length; i++) {
        info.push(new Array(friends[i][1]));
    }

    let newInfo = new Array();
    for (let i = 0; i < info.length; i++) {
        if (JSON.stringify(newInfo).indexOf(info[i]) === -1) {
            newInfo.push(info[i]);
        }
    }

    newInfo = newInfo.filter((el) => {
        return JSON.stringify(el) !== JSON.stringify(new Array(user));
    });

    return newInfo;
}

function makeVisitorsList(visitors, friends) {
    const info = new Array();

    for (let i = 0; i < visitors.length; i++) {
        info.push(new Array(visitors[i]));
    }

    let newInfo = new Array();
    for (let i = 0; i < info.length; i++) {
        if (JSON.stringify(newInfo).indexOf(info[i]) === -1) {
            newInfo.push(info[i]);
        }
    }

    const alreadyFriendsList = exportAlreadyFriends(friends);

    let removeAlreadyFriends = newInfo;
    for (let i = 0; i < alreadyFriendsList.length; i++) {
        removeAlreadyFriends = removeAlreadyFriends.filter((el) => {
            return el[0] !== alreadyFriendsList[i];
        });
    }

    return removeAlreadyFriends;
}

function exportAlreadyFriends(friends) {
    let alreadyFriendsList = new Array();

    for (let i = 0; i < friends.length; i++) {
        alreadyFriendsList.push(new Array(friends[i][0]));
    }

    let newInfo = new Array();
    for (let i = 0; i < alreadyFriendsList.length; i++) {
        if (JSON.stringify(newInfo).indexOf(alreadyFriendsList[i]) === -1) {
            newInfo.push(...alreadyFriendsList[i]);
        }
    }

    return newInfo;
}

function calcAcquaintance(friends, friendsList) {
    const countStandard = new Array();

    for (let i = 0; i < friends.length; i++) {
        countStandard.push(friends[i][1]);
    }

    for (let i = 0; i < friendsList.length; i++) {
        const count = countStandard.filter((el) => {
            return el === friendsList[i][0];
        }).length;
        friendsList[i].push(count);
    }

    return friendsList;
}

function calcVisitors(visitors, friendsList) {
    for (let i = 0; i < friendsList.length; i++) {
        const count = visitors.filter((el) => {
            return el === friendsList[i][0];
        }).length;
        friendsList[i].push(count);
    }
    return friendsList;
}

module.exports = problem7;
