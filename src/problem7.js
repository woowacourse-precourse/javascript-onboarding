function problem7(user, friends, visitors) {
  const userFriends = [];
  const recommendFriends = new Map();

  friends.forEach(item => {
    if(item.includes(user)) userFriends.push(item.join('').replace(user, ''));
  });

  userFriends.forEach(item => {
    for (let i=0; i<friends.length; i++) {
      if (friends[i].includes(item) && !friends[i].includes(user)) {
        const newUser = friends[i].filter(x => x !== item);
        newUser.forEach(user => {
          if (!userFriends.includes(user)) recommendFriends.has(user) ? recommendFriends.set(user, recommendFriends.get(user) + 10) : recommendFriends.set(user, 10);
        });
      }
    }
  });

  visitors.forEach(visitor => {
    if (!userFriends.includes(visitor)) recommendFriends.has(visitor) ? recommendFriends.set(visitor, recommendFriends.get(visitor) + 1) : recommendFriends.set(visitor, 1);
  });

  return sortAnswer([...recommendFriends]);
}

function sortAnswer(answer) {
  answer.sort(([firstStr, firstNum], [secondStr, secondNum]) => {
    if (firstNum === secondNum) {
      return firstStr.localeCompare(secondStr);
    } else {
      return secondNum - firstNum;
    }
  });

  return answer.map(x => x[0]).slice(0, 5);
}

module.exports = problem7;
