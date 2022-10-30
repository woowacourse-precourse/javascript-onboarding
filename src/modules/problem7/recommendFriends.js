function recommendFriends(user, usersList, friendsList) {
  return [...usersList.entries()]
    .filter(([userName, score]) => {
      if (userName === user) return false;
      if (friendsList.includes(userName)) return false;
      if (score === 0) return false;
      return true;
    })
    .sort((a, b) => a.score - b.score)
    .map(([userName, score]) => userName);
}

module.exports = recommendFriends;
