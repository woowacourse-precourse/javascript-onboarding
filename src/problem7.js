const getScore = () => {
  const scoreList = [];

  const calcScore = (user, score) => {
    const userScore = scoreList.find((list) => list.user === user);
    if (userScore) {
      userScore.score += score;
      return;
    }
    scoreList.push({ user, score });
  };

  return { scoreList, calcScore };
};

const getUserFriends = (friendList, user) => {
  const userFriends = [];

  friendList.forEach(([userA, userB]) => {
    if (userA === user) userFriends.push(userB);
    if (userB === user) userFriends.push(userA);
  });

  return userFriends;
};

const sortScore = (scoreList) => {
  const sortNickname = (userA, userB) => {
    if (userA > userB) {
      return 1;
    } else if (userA < userB) {
      return -1;
    } else {
      return 0;
    }
  };

  scoreList.sort((curList, nextList) => {
    if (curList.score === nextList.score) {
      return sortNickname(curList.user, nextList.user);
    }
    return nextList.score - curList.score;
  });
};

function problem7(user, friends, visitors) {
  const { scoreList, calcScore } = getScore();
  const userFriends = getUserFriends(friends, user);
  const isUserFriends = (nickname) => userFriends.includes(nickname);

  friends.forEach(([userA, userB]) => {
    if (userA === user || userB === user) return;
    if (isUserFriends(userA) && !isUserFriends(userB)) {
      calcScore(userB, 10);
    }
    if (isUserFriends(userB) && !isUserFriends(userA)) {
      calcScore(userA, 10);
    }
  });

  visitors.forEach((visitor) => {
    if (!isUserFriends(visitor)) calcScore(visitor, 1);
  });

  sortScore(scoreList);
}

module.exports = problem7;
