function problem7(user, friends, visitors) {
  let recommendableFriends = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      recommendableFriends.push(friends[i][j]);
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    recommendableFriends.push(visitors[i]);
  }

  recommendableFriends = [...new Set(recommendableFriends)];

  let recommendableFriendsWithScore = {};
  for (let i in recommendableFriends) {
    recommendableFriendsWithScore[recommendableFriends[i]] = 0;
  }

  friend_name = "";
  user_friends = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      const user_index = friends[i].indexOf(user);
      if (user_index === 0) {
        friend_name = friends[i][1];
        user_friends.push(friend_name);
      } else {
        friend_name = friends[i][0];
        user_friends.push(friend_name);
      }
    }
  }

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < user_friends.length; j++) {
      if (friends[i].includes(user_friends[j])) {
        const friend_index = friends[i].indexOf(user_friends[j]);
        if (friend_index === 0) {
          friend_name = friends[i][1];
          recommendableFriendsWithScore[friend_name] = 10;
          recommendableFriendsWithScore[user] = -1;
        } else {
          friend_name = [friends][i][0];
          recommendableFriendsWithScore[friend_name] = 10;
          recommendableFriendsWithScore[user] = -1;
        }
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i]) {
      recommendableFriendsWithScore[visitors[i]] += 1;
    }
  }

  for (let i = 0; i < user_friends.length; i++) {
    delete recommendableFriendsWithScore[user_friends[i]];
  }

  let friendsSorting = [];
  for (let name in recommendableFriendsWithScore) {
    friendsSorting.push([name, recommendableFriendsWithScore[name]]);
  }

  let recommendFriendsWithScore = [];
  for (let i = 0; i < friendsSorting.length; i++) {
    if (friendsSorting[i][1] > 0) {
      recommendFriendsWithScore.push([
        friendsSorting[i][0],
        friendsSorting[i][1],
      ]);

      recommendFriendsWithScore
        .sort((friend1, friend2) => {
          if (friend1[1] > friend2[1]) return 1;
          else if (friend1[1] < friend2[1]) return -1;
          else if (friend1[0] < friend2[0]) return 1;
          else if (friend1[0] > friend2[0]) return -1;
          return 0;
        })
        .reverse();
    }
  }

  let recommendFriends = [];

  for (let i = 0; i < recommendFriendsWithScore.length; i++) {
    recommendFriends.push(recommendFriendsWithScore[i][0]);
  }

  var answer = recommendFriends;
  return answer;
}

module.exports = problem7;
