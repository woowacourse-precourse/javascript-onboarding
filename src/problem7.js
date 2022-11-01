function problem7(user, friends, visitors) {
    var answer = [];

    let userFriendsList = getUserFriendsList(user, friends);
    let pointMap = getPointMap(friends, userFriendsList, visitors);

    return answer;
}

function getUserFriendsList(user, friends) {
    let arr = [];
    friends.map((element) => {
        if (element.includes(user)) {
            arr.push(element[0]);
        }
    });
    return arr;
}

function getPointMap(friends, userFriendsList, visitors) {
    let map = new Map();
    friends.map((element) => {
        let userFriend = element[0];
        let recommendFriend = element[1];

        if (userFriendsList.includes(userFriend) && recommendFriend !== user) {
            if (map.get(recommendFriend) === undefined) {
                map.set(recommendFriend, 10);
            } else {
                let point = map.get(recommendFriend);
                map.set(recommendFriend, point + 10);
            }
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
