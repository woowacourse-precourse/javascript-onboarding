function problem7(user, friends, visitors) {
  const userFriends = [];
  const recommendFriends = new Map();

  friends.forEach(item => {
    if(item.includes(user)) userFriends.push(item.join('').replace(user, ''))
  });
}

module.exports = problem7;
