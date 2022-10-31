class ScoreTable {
  #scoreOfUsers;

  constructor() {
    this.#scoreOfUsers = {};
  }

  getScoreOfUsers() {
    return this.#scoreOfUsers;
  }

  addScoreOfUsers(recommandFriend, additionalScore) {
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

function updateRecommand(
  scoreTable,
  canBeRecommandList,
  notForRecommand,
  additionalScore
) {
  canBeRecommandList.forEach((friend) => {
    if (notForRecommand.includes(friend)) {
      return;
    }
    scoreTable.addScoreOfUsers(friend, additionalScore);
  });
}

function compareByScore(user1, user2) {
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
  const relation = getRelation(friends);
  const alreadyFriends = relation[user] || [];
  const notForRecommand = [...alreadyFriends, user];

  const scoreTable = new ScoreTable();
  alreadyFriends.forEach((friend) => {
    updateRecommand(scoreTable, relation[friend], notForRecommand, 10);
  });
  updateRecommand(scoreTable, visitors, notForRecommand, 1);

  const result = Object.entries(scoreTable.getScoreOfUsers())
    .sort(compareByScore)
    .reduce((recommands, [name]) => [...recommands, name], [])
    .slice(0, 5);

  return result;
}

module.exports = problem7;
