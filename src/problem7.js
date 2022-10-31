function findFriends(friends, user) {
  const friendsArr = [];
  for (const friend of friends) {
    if (friend[0] === user) {
      friendsArr.push(friend[1]);
    } else if (friend[1] === user) {
      friendsArr.push(friend[0]);
    }
  }
  return friendsArr;
}

function findRecommendFriends(recommendFrindsArr, user, closeFriend, friends) {
  for (const friend of friends) {
    if (friend[0] === closeFriend && friend[1] !== user) {
      recommendFrindsArr.push(friend[1]);
    } else if (friend[1] === closeFriend && friend[0] !== user) {
      recommendFrindsArr.push(friend[0]);
    }
  }
}

function getRecommendFriendsArr(friends, friendsArr, user) {
  const recommendFrindsArr = [];
  [...friendsArr].map((friend) =>
    findRecommendFriends(recommendFrindsArr, user, friend, friends)
  );
  return recommendFrindsArr;
}

function addRecommendFriendsToMap(recommendFrindsArr, map) {
  for (let recommendFriend of recommendFrindsArr) {
    map.has(recommendFriend)
      ? map.set(recommendFriend, map.get(recommendFriend) + 10)
      : map.set(recommendFriend, 10);
  }
}

function addVisitorToMap(map, visitors) {
  for (let visitor of visitors) {
    let getValue = map.get(visitor);
    map.has(visitor) ? map.set(visitor, getValue + 1) : map.set(visitor, 1);
  }
}

function addFriendsToMap(friendsArr, map) {
  for (let friend of friendsArr) {
    map.set(friend, 0);
  }
}

function sortMap(map) {
  const sortedMap = [...map].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return b[1] - a[1];
    }
  });
  return sortedMap;
}

function deleteZeroValue(sortedMap) {
  const sortedMapToArr = [...sortedMap];
  for (let i = 0; i < sortedMapToArr.length; i++) {
    const peek = sortedMapToArr[sortedMapToArr.length - 1];
    peek[1] === 0 ? sortedMapToArr.pop() : "";
  }
  return sortedMapToArr;
}

function sliceFiveUser(deletedZeroValue) {
  let username = [];
  deletedZeroValue.slice(0, 5).map((user) => username.push(user[0]));
  return username;
}

function isUserId(user, friends, visitors) {
  const userId = [];
  const isUserIdArr = [];
  const userIdLength = [];
  let isUserIdLength = false;
  userId.push(user);

  friends.flatMap((friend) => {
    for (let f of friend) {
      userId.push(f);
    }
  });

  for (let visitor of visitors) {
    userId.push(visitor);
  }

  [...new Set(userId)].map((user) => {
    const regex = /^[a-z]*$/;
    isUserIdArr.push(regex.test(user));
    userIdLength.push(user.length);
  });

  userIdLength.map((item) => {
    if (item < 1 || item > 30) {
      isUserIdLength = true;
    }
  });

  if (!isUserIdArr.every((item) => item === true)) {
    throw "아이디는 알파벳 소문자로 작성해주세요";
  }
  if (isUserIdLength) {
    throw `아이디는 1이상 30이하로 작성해주세요`;
  }
}

function isUserIdLengthValid(user) {
  if (user.length < 1 || user.length > 30) {
    throw "user의 길이는 1 이상 30 이하 문자열만 가능합니다.";
  }
}

function isLengthValid(arr, minimumLen, maximumLen, ErroMessage) {
  if (arr.length < minimumLen || arr.length > maximumLen) {
    throw ErroMessage;
  }
}

function isValid(user, friends, visitors) {
  isUserId(user, friends, visitors);
  isUserIdLengthValid(user);
  isLengthValid(
    friends,
    1,
    10000,
    "friends는 1이상, 10,000이하로 작성해주세요"
  );
  isLengthValid(
    visitors,
    0,
    10000,
    "visitors는 0이상 10,000이하로 작성해주세요"
  );
}
function problem7(user, friends, visitors) {
  isValid(user, friends, visitors);
  const scoreMap = new Map();
  const friendsArr = findFriends(friends, user);
  const recommendFrindsArr = getRecommendFriendsArr(friends, friendsArr, user);
  addRecommendFriendsToMap(recommendFrindsArr, scoreMap);
  addVisitorToMap(scoreMap, visitors);
  addFriendsToMap(friendsArr, scoreMap);
  const sortedMap = sortMap(scoreMap);
  const deletedZeroValue = deleteZeroValue(sortedMap);
  const answer = sliceFiveUser(deletedZeroValue);

  return answer;
}

module.exports = problem7;
