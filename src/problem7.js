function Score() {
  const score = {};
  this.getScore = () => score;
  this.setScore = (recommandFriend, additionalScore) => {
    if (!score[recommandFriend]) {
      score[recommandFriend] = 0;
    }
    score[recommandFriend] += additionalScore;

    return score;
  };
}

function getRelation(friends) {
  const relation = {};
  friends.forEach(([user1, user2]) => {
    relation[user1] = [...(relation[user1] || []), user2];
    relation[user2] = [...(relation[user2] || []), user1];
  });
  return relation;
}

function setRecommand(score, friendList, notForRecommand, additionalScore) {
  friendList.forEach((friend) => {
    if (notForRecommand.includes(friend)) {
      return;
    }
    score.setScore(friend, additionalScore);
  });
}

function sortByScore(user1, user2) {
  const [user1Name, user1Score] = user1;
  const [user2Name, user2Score] = user2;

  if (user2Score !== user1Score) {
    return user2Score - user1Score;
  }
  if(user2Name > user1Name){
    return -1;
  }
  return 1;
}

function problem7(user, friends, visitors) {
  const score = new Score();
  const relation = getRelation(friends);
  const alreadyFriend = relation[user] || [];
  const notForRecommand = [...alreadyFriend, user];

  alreadyFriend.forEach((friend) => {
    setRecommand(score, relation[friend], notForRecommand, 10);
  });
  setRecommand(score, visitors, notForRecommand, 1);

  const result = Object.entries(score.getScore())
    .sort(sortByScore)
    .reduce((recommands, [name]) => [...recommands, name], [])
    .slice(0, 5);

  return result;
}

module.exports = problem7;
