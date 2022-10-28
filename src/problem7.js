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
  return answer;
}

module.exports = problem7;
