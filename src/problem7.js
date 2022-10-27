function Score() {
  const score = {};
  this.getScore = () => score;
  this.setScore = (recommandFriend, additionalScore) => {
    if (!score[recommandFriend]) score[recommandFriend] = 0;
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

function setKnowTogetherScore(user, score, knowTogetherFriends) {
  knowTogetherFriends.forEach((knowTogether) => {
    if (knowTogether === user) return;
    score.setScore(knowTogether, 10);
  });
}

function problem7(user, friends, visitors) {
  const score = new Score();
  const relation = getRelation(friends);

  relation[user].forEach((friend) => {
    setKnowTogetherScore(user, score, relation[friend]);
  });

  visitors.forEach((visitor) => {
    if (relation[user].includes(visitor)) return;
    score.setScore(visitor, 1);
  });

  const result = Object.entries(score.getScore())
    .sort((user1, user2) => {
      const [user1Name, user1Score] = user1;
      const [user2Name, user2Score] = user2;
      if (user2Score === user1Score) {
        return user2Name > user1Name ? -1 : 1;
      }
      return user2Score - user1Score;
    })
    .reduce((recommands, [name]) => [...recommands, name], [])
    .slice(0, 5);

  return result;
}

module.exports = problem7;
