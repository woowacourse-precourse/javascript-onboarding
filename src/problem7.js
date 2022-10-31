function getUserFriend(user, friends) {
  let friendArr = [];
  friends.map(arr => {
    if (arr.includes(user))
      arr[0] === user ? friendArr.push(arr[1]) : friendArr.push(arr[0])
  })
  return friendArr;
};

function getRecommendFriend(user, userFriends, friends) {
  const recommendFriend = friends.filter((arr) =>
    !arr.includes(user) && arr.some((friend) => userFriends.includes(friend)))
    .map((arr) =>
      userFriends.includes(arr[0]) ? arr[1] : arr[0]);
  return recommendFriend;
};

function getRecommendScore(user, friends, userFriends) {
  const recommendFriend = getRecommendFriend(user, userFriends, friends);
  const recommendScore = recommendFriend.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 10
    return acc;
  }, {})
  return recommendScore;
}

function getVisitorScore(visitors, userFriends) {
  const removeUserFriends = visitors.concat(userFriends)
    .filter(friend =>
      !visitors.includes(friend) || !userFriends.includes(friend))

  const visitScore = removeUserFriends.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
  return visitScore;
}

function getMaxScore(user, friends, visitors) {
  const userFriends = getUserFriend(user, friends);
  const recommend = getRecommendScore(user, friends, userFriends);
  const visit = getVisitorScore(visitors, userFriends);
  const mergeScore = { ...recommend, ...visit }
  let sorted = Object.entries(mergeScore).sort((a, b) => b[1] - a[1]);
  let topFive = [];

  for (let element of sorted) {
    topFive.push(element[0])
  }
  return topFive.splice(0, 5)
}

function problem7(user, friends, visitors) {
  return getMaxScore(user, friends, visitors);
}

module.exports = problem7;
