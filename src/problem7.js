function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  let score = {};

  userFriends.forEach((name) => {
    const recommendFriends = getUserFriends(name, friends).filter((friendName) => friendName !== user);
    recommendFriends.forEach((name) => {
      if(score[name]) {
        score[name] = score[name] + 10;
      } else {
        score[name] = 10;
      }
    });
  });

}

function getUserFriends(user, friends) {
  const friendsArr = friends.filter((arr) => arr.includes(user) === true);
  return friendsArr.map(([firstName, secondName]) => firstName === user ? secondName : firstName);
}

module.exports = problem7;
