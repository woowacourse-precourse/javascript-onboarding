/*
[x] 전체 유저의 친구 관계를 구하는 기능을 구현한다.
[x] 유저에 대해서 친구 추천을 하는 기능을 구현한다.
[x] 정렬하여 결과를 반환한다.
*/

class FriendRecommender {
  userRelation = {};
  constructor(user, friends, visitors) {
    this._initUserRelation(friends);
    this.recommendedFriends = this._recommendFriend(user, visitors);
  }

  _initUserRelation(friends) {
    for (const [personA, personB] of friends) {
      if (!this.userRelation[personA]) {
        this.userRelation[personA] = new Set();
      }
      if (!this.userRelation[personB]) {
        this.userRelation[personB] = new Set();
      }
      this.userRelation[personA].add(personB);
      this.userRelation[personB].add(personA);
    }
  }

  _recommendFriend(user, visitors) {
    const recommendedFriends = {};
    const myFriendSet = this.userRelation[user];
    for (const [username, userFriendSet] of Object.entries(this.userRelation)) {
      if (user === username || myFriendSet.has(username)) {
        continue;
      }
      if (!recommendedFriends[username]) {
        recommendedFriends[username] = 0;
      }
      const friendIntersection = intersect(myFriendSet, userFriendSet);
      recommendedFriends[username] += 10 * [...friendIntersection].length;
    }

    for (const username of visitors) {
      if (myFriendSet.has(username)) {
        continue;
      }
      if (!recommendedFriends[username]) {
        recommendedFriends[username] = 0;
      }
      recommendedFriends[username] += 1;
    }

    return Object.entries(recommendedFriends).filter(
      ([_, recommendedNumber]) => recommendedNumber !== 0
    );
  }
}

function intersect(setA, setB) {
  if (!setA instanceof Set || !setB instanceof Set) {
    throw new Error("params is not Set instance.");
  }
  return new Set([...setA].filter((x) => setB.has(x)));
}

function compare(userA, userB) {
  const [usernameA, userScoreA] = userA;
  const [usernameB, userScoreB] = userB;
  if (userScoreA === userScoreB) {
    return usernameA < usernameB ? -1 : 1;
  }
  return userScoreB - userScoreA;
}

function problem7(user, friends, visitors) {
  const { recommendedFriends } = new FriendRecommender(user, friends, visitors);
  return recommendedFriends.sort(compare).map(([username]) => username);
}

module.exports = problem7;
