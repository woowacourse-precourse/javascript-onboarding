function problem7(user, friends, visitors) {
  var myFriend = findFriend(user, friends);
  var excludeMe = friends.filter((item) => !item.includes(user));
  var newVisitor = visitors.filter((item) => !myFriend.includes(item));
  var newFriend = [];
  var recommendFriend = [];
  var newFriendObject = {};
  var newVisitorObject = {};

  for (let i = 0; i < myFriend.length; i++) {
    newFriend = newFriend.concat(findFriend(myFriend[i], excludeMe));
  }

  newFriendObject = newFriend.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 10;
    return acc;
  }, {});

  newVisitorObject = newVisitor.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  var newFriendKey = Object.keys(newFriendObject);
  var newVisitorKey = Object.keys(newVisitorObject);

  for (let j = 0; j < newVisitorKey.length; j++) {
    if (Object.keys(newFriendObject).length > 5) break;

    if (newFriendKey.includes(newVisitorKey[j])) {
      newFriendObject[newVisitorKey[j]] += newVisitorObject[newVisitorKey[j]];
    } else {
      newFriendObject[newVisitorKey[j]] = newVisitorObject[newVisitorKey[j]];
    }
  }

  recommendFriend = Object.entries(newFriendObject);

  return recommendFriend.sort((a, b) => b[1] - a[1]).map((item) => item[0]);
}

function findFriend(user, friends) {
  let selected = friends.filter((item) => item.includes(user));
  let combinedFriend = [];

  for (let i = 0; i < selected.length; i++) {
    for (let j = 0; j < selected[i].length; j++) {
      if (selected[i][j] != user) combinedFriend.push(selected[i][j]);
    }
  }

  return combinedFriend;
}

module.exports = problem7;
