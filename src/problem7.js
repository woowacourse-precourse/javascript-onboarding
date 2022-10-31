class RecommandInfo {
  #scoreOfUsers;

  constructor() {
    this.#scoreOfUsers = {};
  }
  getScoreOfUsers() {
    return this.#scoreOfUsers;
  }
  setScoreOfUsers(recommandFriend, additionalScore) {
    this.#scoreOfUsers[recommandFriend] =
      (this.#scoreOfUsers[recommandFriend] || 0) + additionalScore;
  }
}

function getRelation(friends) {
  const relation = {};
  friends.forEach(([user1, user2]) => {
    relation[user1] = [...(relation[user1] || []), user2];
    relation[user2] = [...(relation[user2] || []), user1];
  });
  return relation;
}

function setRecommand(recommandInfo, friendList, notForRecommand, additionalScore) {
  friendList.forEach((friend) => {
    if (notForRecommand.includes(friend)) {
      return;
    }
    recommandInfo.setScoreOfUsers(friend, additionalScore);
  });
}

function sortByScore(user1, user2) {
  const [user1Name, user1Score] = user1;
  const [user2Name, user2Score] = user2;

  if (user2Score !== user1Score) {
    return user2Score - user1Score;
  }
  if (user2Name > user1Name) {
    return -1;
  }
  return 1;
}

function problem7(user, friends, visitors) {
  const recommandInfo = new RecommandInfo();
  const relation = getRelation(friends);
  const alreadyFriend = relation[user] || [];
  const notForRecommand = [...alreadyFriend, user];

  alreadyFriend.forEach((friend) => {
    setRecommand(recommandInfo, relation[friend], notForRecommand, 10);
  });
  setRecommand(recommandInfo, visitors, notForRecommand, 1);

  const result = Object.entries(recommandInfo.getScoreOfUsers())
    .sort(sortByScore)
    .reduce((recommands, [name]) => [...recommands, name], [])
    .slice(0, 5);

  return result;
}

module.exports = problem7;
