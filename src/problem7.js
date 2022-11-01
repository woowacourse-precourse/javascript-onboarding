function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  let score = {};
  let answer = [];

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

  const recommendVisitor = visitors.filter((name) => !userFriends.includes(name));
  recommendVisitor.forEach((name) => {
    if(score[name]) {
      score[name] = score[name] + 1;
    } else {
      score[name] = 1;
    }
  });

  const scoreArr = Object.entries(score).sort((a, b) => {
    if(b[1] > a[1]) {
      return 1;
    } else if (b[1] < a[1]) {
      return -1;
    } else if (b[0] > a[0]) {
      return -1;
    } else if (b[0] < a[0]) {
      return 1;
    }
  });

  for(let i=0; i<scoreArr.length; i++) {
    answer.push(scoreArr[i][0]);
  }
  
  return answer;
}

function getUserFriends(user, friends) {
  const friendsArr = friends.filter((arr) => arr.includes(user) === true);
  return friendsArr.map(([firstName, secondName]) => firstName === user ? secondName : firstName);
}

module.exports = problem7;
