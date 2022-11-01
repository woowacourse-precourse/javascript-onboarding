function problem7(user, friends, visitors) {
  var answer;

  const relation = getRelation(friends);

  let score = {};

  const friendsOfUser = relation[user];

  score = getRelationScore(score, relation, user);
  score = getVisitorScore(score, friendsOfUser, visitors);

  answer = getRankFrom(score);

  return answer;
}

function getRelation(friends) {
  let relation = {};

  for (const friend of friends) {
    const [user1, user2] = friend;

    relation = registerFriendOn(relation, user1, user2);
    relation = registerFriendOn(relation, user2, user1);
  }

  return relation;
}

function registerFriendOn(relation, user1, user2) {
  if (!relation[user1]) {
    relation[user1] = [user2];
  } else if (relation[user1]) {
    relation[user1].push(user2);
  }
  return relation;
}

function getRelationScore(score, relation, user) {
  const friendsOfUser = relation[user];

  for (const friend of friendsOfUser) {
    const sameFriends = relation[friend];
    score = registerRelationScore(score, friendsOfUser, sameFriends, user);
  }

  return score;
}

function registerRelationScore(score, friendsOfUser, sameFriends, user) {
  const sameFriendScore = 10;

  for (const sameFriend of sameFriends) {
    if (sameFriend !== user && !friendsOfUser.includes[sameFriend]) {
      if (!score[sameFriend]) {
        score[sameFriend] = sameFriendScore;
      } else if (score[sameFriend]) {
        score[sameFriend] += sameFriendScore;
      }
    } else if (sameFriend === user) {
      continue;
    }
  }

  return score;
}

function getVisitorScore(score, friendsOfUser, visitors) {
  const visitorScore = 1;

  for (const visitor of visitors) {
    if (!friendsOfUser.includes(visitor)) {
      if (!score[visitor]) {
        score[visitor] = visitorScore;
      } else if (score[visitor]) {
        score[visitor] += visitorScore;
      }
    }
  }

  return score;
}

function getRankFrom(score) {
  const rank = Object.entries(score).sort((a, b) => {
    const [aName, aScore] = a;
    const [bName, bScore] = b;

    if (aScore > bScore) {
      return -1;
    } else if (aScore < bScore) {
      return 1;
    } else if (aName > bName) {
      return 1;
    } else if (aName < bName) {
      return -1;
    }
  });

  const fiveRank = getFive(rank);

  return fiveRank;
}

function getFive(rank) {
  const minScore = 1;
  const limit = 5;

  let fiveRank = [];

  for (const [name, score] of rank) {
    if (score >= minScore) {
      fiveRank.push(name);
    }
  }

  fiveRank = fiveRank.slice(0, limit);

  return fiveRank;
}

module.exports = problem7;
