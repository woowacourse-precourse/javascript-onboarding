function findFriendsOfUser(user, friends) {
  let friendsArray = [];

  friends.map((friend) => {
    if (friend.includes(user)) {
      let newArray = friend.filter((element) => element !== user);
      friendsArray.push(newArray[0]);
    }
  });

  return friendsArray;
}

function findFriendsOfFriend(user, friendsOfUser, friends) {
  let friendsOfFriend = [];

  friends.map((friend) => {
    friendsOfUser.map((myFriend) => {
      if (friend.includes(myFriend) && !friend.includes(user)) {
        let newArray = friend.filter((element) => element !== myFriend);
        if (!friendsOfFriend.includes(newArray[0])) {
          friendsOfFriend.push(newArray[0]);
        }
      }
    });
  });

  return friendsOfFriend;
}

function scoreCandidates(friends, visitors, friendsOfUser) {
  let candidatesArray = [];

  friends.map((friend) => {
    candidatesArray.push([friend, 20]);
  });

  visitors.map((visitor) => {
    let isDone = false;
    candidatesArray.map((candidate, index) => {
      if (candidate.includes(visitor)) {
        candidatesArray[index][1]++;
        isDone = true;
      }
    });
    if (!isDone && !friendsOfUser.includes(visitor)) {
      candidatesArray.push([visitor, 1]);
    }
  });

  return candidatesArray;
}

function sortCandidatesArray(candidatesArray) {
  let newArray = candidatesArray.sort((prev, cur) => {
    if (prev[1] > cur[1]) return -1;
    else if (prev[1] < cur[1]) return 1;
    else if (prev[1] == cur[1]) {
      if (prev[0] > cur[0]) return 1;
      if (prev[0] < cur[0]) return -1;
    }
  });

  return newArray;
}

function getRecommendFriends(candidatesArray) {
  let recommendFriends = [];

  if (candidatesArray.length > 5) {
    candidatesArray.slice(0, 4);
  }
  candidatesArray.map((candidate) => {
    recommendFriends.push(candidate[0]);
  });
  return recommendFriends;
}

function problem7(user, friends, visitors) {
  const friendsOfUser = findFriendsOfUser(user, friends);
  const friendsOfFriend = findFriendsOfFriend(user, friendsOfUser, friends);
  const candidatesArray = scoreCandidates(
    friendsOfFriend,
    visitors,
    friendsOfUser
  );

  return getRecommendFriends(sortCandidatesArray(candidatesArray));
}

module.exports = problem7;
