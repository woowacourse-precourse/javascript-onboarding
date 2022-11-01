function problem7(user, friends, visitors) {
  const usersFriendsArray = [];
  friends.map((el) => {
    if (el.includes(user)) {
      usersFriendsArray.push(el);
    }
  });

  const usersFriends = [];
  usersFriendsArray.map((friendArray) => {
    usersFriends.push(
      ...friendArray.filter((person) => {
        return person !== user;
      })
    );
  });

  const friendsFriendsArray = [];
  usersFriends.map((usersFriend) => {
    friends.map((el) => {
      if (el.includes(usersFriend)) {
        friendsFriendsArray.push(el);
      }
    });
  });

  let friendsFriends = [];

  friendsFriendsArray.map((el) => {
    friendsFriends.push(...el);
  });

  usersFriends.map((usersFriend) => {
    friendsFriends = friendsFriends.filter((friendsFriend) => {
      return usersFriend !== friendsFriend;
    });
  });

  friendsFriends = friendsFriends.filter((friendFriend) => {
    return user !== friendFriend;
  });

  let recommendFriends = [];

  friendsFriends.map((person) => {
    recommendFriends.push({ name: person, point: 10 });
  });

  let visitorsWithoutFriends = [...visitors];

  usersFriends.map((friend) => {
    visitorsWithoutFriends = visitorsWithoutFriends.filter((visitor) => {
      return friend !== visitor;
    });
  });

  visitorsWithoutFriends.map((person) => {
    recommendFriends.push({ name: person, point: 1 });
  });

  function getKeyIndex(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === obj.name) {
        return i;
      }
    }
    return -1;
  }

  function mergePoint(array) {
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
      var idx = getKeyIndex(resultArr, array[i]);
      if (idx > -1) {
        resultArr[idx].point += Number(array[i].point);
      } else {
        resultArr.push(array[i]);
      }
    }
    return resultArr;
  }

  recommendFriends = mergePoint(recommendFriends)
    .sort(function (a, b) {
      return b.point - a.point;
    })
    .sort(function (a, b) {
      if (a.point === b.point) {
        return a.name < b.name ? -1 : 1;
      }
    });

  let recommendFriendsName = [];

  recommendFriends.map((el) => recommendFriendsName.push(el.name));

  var answer = recommendFriendsName.splice(0, 5);
  return answer;
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;
