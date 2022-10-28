function problem7(user, friends, visitors) {
  var answer;
  let friendsList = {};
  let userScoreList = {};
  let myFriends = [];

  visitors.forEach((visitor) => {
    if (userScoreList[visitor] === undefined) userScoreList[visitor] = 0;
    userScoreList[visitor] += 1;
  });

  friends.forEach((friend) => {
    const [a, b] = friend;
    userScoreList[a] = 0;
    userScoreList[b] = 0;
    if (friendsList[a] === undefined) friendsList[a] = [];
    if (friendsList[b] === undefined) friendsList[b] = [];
    friendsList[a].push(b);
    friendsList[b].push(a);
    if (friend.includes(user)) {
      myFriends.push(...friend.filter((x) => x !== user));
    }
  });

  myFriends.forEach((myFriend) => {
    friendsList[myFriend]
      .filter((x) => x !== user)
      .forEach((x) => {
        userScoreList[x] += 10;
      });
  });

  answer = Object.entries(userScoreList)
    .filter((userScore) => {
      const [, score] = userScore;
      return score > 0;
    })
    .sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] > b[0]) return 1;
        else return 1;
      } else if (a[1] > b[1]) return -1;
      return 1;
    });
  answer = answer.flatMap((x) => x).filter((x, idx) => idx % 2 === 0);

  return answer;
}

module.exports = problem7;
