function problem7(user, friends, visitors) {
  //아는 친구의 수 : 10점
  //타임 라인에 방문한 횟수: 10점

  const userFriendList = [user]; //유저의 친구 리스트(리턴에 포함되면 안된다)
  const usersScore = {}; //점수판

  friends.map((friend) => {
    if (friend.includes(user)) {
      const friendName = friend[0] === user ? friend[1] : friend[0];
      userFriendList.push(friendName);
    } else {
      initScore(usersScore, friend[0]);
      initScore(usersScore, friend[1]);
    }
  });

  friends.map((friend) => {
    const firstFriend = friend[0];
    const secondFriend = friend[1];

    if (
      userFriendList.includes(firstFriend) &&
      !userFriendList.includes(secondFriend)
    ) {
      addScore(usersScore, secondFriend, 10);
    }

    if (
      !userFriendList.includes(firstFriend) &&
      userFriendList.includes(secondFriend)
    ) {
      addScore(usersScore, firstFriend, 10);
    }
  });

  visitors.map((visitor) => {
    if (!userFriendList.includes(visitor)) {
      addScore(usersScore, visitor, 1);
    }
  });

  const friendsScoreList = Object.keys(usersScore).map((name) => {
    return [name, usersScore[name]];
  });

  friendsScoreList.sort((a, b) => {
    if (a[1] === b[1]) {
      const x = a[0],
        y = b[0];

      return x < y ? -1 : x > y ? 1 : 0;
    }
    return b[1] - a[1];
  });

  const answer = friendsScoreList
    .filter((scoreInfo, index) => {
      return index < 5 && scoreInfo[1] > 0;
    })
    .map((scoreInfo) => scoreInfo[0]);

  return answer;
}

const initScore = (usersScore, friendName) => {
  if (!(friendName in usersScore)) {
    usersScore[friendName] = 0;
  }
};

const addScore = (usersScore, friendName, score) => {
  if (!(friendName in usersScore)) {
    usersScore[friendName] = score;
  } else {
    usersScore[friendName] = usersScore[friendName] + score;
  }
};

module.exports = problem7;
