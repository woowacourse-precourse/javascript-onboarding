function problem7(user, friends, visitors) {
  var answer = recommendFriends(user, friends, visitors);
  return answer;
}

function recommendFriends(user, friends, visitors) {
  const resultPointMap = createResultMap(user, friends, visitors);
  const friendsMap = makeFriendsMap(friends);
  const userFriends = friendsMap[user];
  return removeUserFriends(sortList(resultPointMap), userFriends).slice(0, 5);
}

function removeUserFriends(recommendUserList, userFriends) {
  return Object.keys(recommendUserList).filter(
    (key) => !userFriends.includes(key)
  );
}

function sortList(userList) {
  return Object.entries(userList)
    .sort()
    .sort(([, prev], [, next]) => next - prev)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
}

function createResultMap(user, friends, visitors) {
  let relationPointMap = friendsPointCounter(user, friends);
  return visitorsPointCounter(relationPointMap, visitors);
}

function visitorsPointCounter(pointMap, visitors) {
  const prevPointMap = pointMap;
  visitors.forEach((visitor) => {
    !prevPointMap[visitor]
      ? (prevPointMap[visitor] = 1)
      : (prevPointMap[visitor] += 1);
  });
  return prevPointMap;
}

function friendsPointCounter(user, friends) {
  const friendsMap = makeFriendsMap(friends);
  const userFriends = friendsMap[user];
  let pointMap = {};

  const friendsRelation = userFriends.reduce((acc, cur) => {
    acc.push(...searchFriends(user, friendsMap[cur]));
    return acc;
  }, []);
  friendsRelation.forEach((friend) => {
    !pointMap[friend] ? (pointMap[friend] = 10) : (pointMap[friend] += 10);
  });
  return pointMap;
}

function searchFriends(user, friends) {
  return friends.reduce((acc, cur) => {
    if (cur !== user) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

function makeFriendsMap(friends) {
  let relations = {};
  friends.forEach((relation) => {
    let [friend1, friend2] = relation;
    makeRelation(friend1, friend2, relations);
  });
  return relations;
}

function makeRelation(friend1, friend2, relations) {
  let prevRelations = relations;
  prevRelations = makeFriends(friend1, friend2, prevRelations);
  prevRelations = makeFriends(friend2, friend1, prevRelations);
  return prevRelations;
}

function makeFriends(friend1, friend2, relations) {
  let prevRelation = relations;
  relations.hasOwnProperty(friend1)
    ? prevRelation[friend1].push(friend2)
    : (prevRelation[friend1] = [friend2]);
  return prevRelation;
}

module.exports = problem7;
