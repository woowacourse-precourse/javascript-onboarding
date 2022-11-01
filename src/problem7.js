class ScoreTable {
  #scoreOfUsers;

  constructor() {
    this.#scoreOfUsers = {};
  }

  getScoreOfUsers() {
    return this.#scoreOfUsers;
  }

  addScoreOfUser(recommandFriend, additionalScore) {
    const prevScore = this.#scoreOfUsers[recommandFriend] || 0;
    this.#scoreOfUsers[recommandFriend] = prevScore + additionalScore;
  }
}

function addFriend(friend, friendList = []) {
  return [...friendList, friend];
}

function getRelation(friends) {
  return friends.reduce((relation, [user1, user2]) => {
    relation[user1] = addFriend(user2, relation[user1]);
    relation[user2] = addFriend(user1, relation[user2]);

    return relation;
  }, {});
}

function updateScoreTable({
  scoreTable,
  canBeRecommandList,
  notForRecommand,
  additionalScore,
}) {
  return canBeRecommandList
    .filter((canBeRecommand) => !notForRecommand.includes(canBeRecommand))
    .forEach((recommand) => scoreTable.addScoreOfUser(recommand, additionalScore));
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
    const friendsOfFriend = relation[friend];

    updateScoreTable({
      scoreTable,
      canBeRecommandList: friendsOfFriend,
      notForRecommand,
      additionalScore: 10,
    });
  });

  updateScoreTable({
    scoreTable,
    canBeRecommandList: visitors,
    notForRecommand,
    additionalScore: 1,
  });

  const result = Object.entries(scoreTable.getScoreOfUsers())
    .sort(compareByScore)
    .reduce((recommands, [name]) => [...recommands, name], []);

  result.length = 5;

  return result;
}

module.exports = problem7;
