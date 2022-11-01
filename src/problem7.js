function problem7(user, friends, visitors) {
    var answer = [];

    let userFriendsList = getUserFriendsList(user, friends);
    let pointMap = getPointMap(user, friends, visitors, userFriendsList);
    let sortByPoint = [...pointMap.entries()].sort((prev, cur) => {
        if (prev[1] < cur[1]) return 1;
        if (prev[1] > cur[1]) return -1;
        if (prev[0] > cur[0]) return 1;
        if (prev[0] < cur[0]) return -1;
    });

    sortByPoint.some((element) => {
        answer.push(element[0]);
        if (answer.length === 5) {
            return true;
        }
    });
    console.log(answer);

    return answer;
}

function getUserFriendsList(user, friends) {
    let arr = [];
    friends.map((element) => {
        if (element.includes(user)) {
            element[0] === user ? arr.push(element[1]) : arr.push(element[0]);
        }
    });
    return arr;
}

function getPointMap(user, friends, visitors, userFriendsList) {
    let map = new Map();
    friends.map((element) => {
        if (element[0] === user || element[1] === user) return;
        if (
            userFriendsList.includes(element[0]) &&
            userFriendsList.includes(element[1])
        )
            return;
        if (
            !userFriendsList.includes(element[0]) &&
            !userFriendsList.includes(element[1])
        )
            return;

        let userFriend = userFriendsList.includes(element[0])
            ? element[0]
            : element[1];
        let recommendFriend = userFriendsList.includes(element[0])
            ? element[1]
            : element[0];

        if (map.get(recommendFriend) === undefined) {
            map.set(recommendFriend, 10);
        } else {
            let point = map.get(recommendFriend);
            map.set(recommendFriend, point + 10);
        }
    });

    visitors.forEach((element) => {
        if (!userFriendsList.includes(element)) {
            if (map.has(element)) {
                let point = map.get(element);
                map.set(element, point + 1);
            } else {
                map.set(element, 1);
            }
        }
    });

    return map;
}
module.exports = problem7;
