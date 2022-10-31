function getUserFriends(user, friends) {
  return friends
    .filter((friends) => friends.includes(user))
    .map((friends) => (friends[0] !== user ? friends[0] : friends[1]));
}

function getFriendsOfFriends(user, userFriends, friends) {
  const friensdOfUserFriends = friends
    .filter(
      (friends) =>
        !friends.includes(user) && friends.some((x) => userFriends.includes(x))
    )
    .map((friends) =>
      userFriends.includes(friends[0]) ? friends[1] : friends[0]
    );
  return friensdOfUserFriends;
}

function getRecomendScore(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  const friendsOfUserFriends = getFriendsOfFriends(user, userFriends, friends);
  const list = new Set([...friends.flat(), ...visitors]);
  const notUserFriends = [...list].filter(
    (x) => x !== user && !userFriends.includes(x)
  );
  const recommendFriends = new Map();
  notUserFriends.forEach((x) => recommendFriends.set(x, 0));

  friendsOfUserFriends.forEach((x) =>
    recommendFriends.set(x, recommendFriends.get(x) + 10)
  );
  visitors = visitors.filter((x) => !userFriends.includes(x));
  visitors.forEach((x) => recommendFriends.set(x, recommendFriends.get(x) + 1));

  return recommendFriends;
}

function recommendFriends(user, friends, visitors) {
  const recommendFriends = getRecomendScore(user, friends, visitors);

  return [...recommendFriends]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .filter((x) => x[1] !== 0)
    .map((x) => x[0]);
}

function problem7(user, friends, visitors) {
  const answer = recommendFriends(user, friends, visitors);
  return answer;
}
module.exports = problem7;
