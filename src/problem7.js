function problem7(user, friends, visitors) {
  userFriends = []
  friends.forEach((friend) => {
    (friend[0] === user) ? userFriends.push(friend[1]) : null;
    (friend[1] === user) ? userFriends.push(friend[0]) : null;
  })

  recommendFriends = new Map();
  userFriends.forEach((userFriend) => {
    friends.forEach((friend) => {
    (userFriend === friend[0] && friend[1] !== user) ? recommendFriends.set(friend[1], 10) : null;
    (userFriend === friend[1] && friend[0] !== user) ? recommendFriends.set(friend[0], 10) : null;
    })
  })

  visitors.forEach((visitor) => {
    (recommendFriends.has(visitor)) ? recommendFriends.set(visitor, recommendFriends.get(visitor)+1) : recommendFriends.set(visitor, 1);
    (userFriends.includes(visitor)) ? recommendFriends.delete(visitor) : null;
  })

  return [...recommendFriends].sort((a, b) => {}).map(recommend => recommend[0]);
}

module.exports = problem7;
