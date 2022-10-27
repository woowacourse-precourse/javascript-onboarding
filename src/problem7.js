function mapRelations (key, value, relations) {
  if (relations[key]) {
    relations[key] = [...relations[key], value].sort();
  } else {
    relations[key] = [value];
  }
  return relations;
}

function getRelationships (friends) {
  let relationships = {}
  friends.map(friend => {
    const [f1, f2] = friend; 
    mapRelations(f1, f2, relationships);
    mapRelations(f2, f1, relationships);
  })
  return relationships;
}

function calcFriendScore(user, relationships, scores = {}) {
  const userFriends = relationships[user];
  for (const name in relationships) {
    if (name === user || userFriends.includes(name)) {
      continue;
    }
    const friends = relationships[name] || [];
    const overlapFriends = friends.filter(friend => userFriends.includes(friend)).length;
    if (overlapFriends > 0) {
      scores[name] = 10 * overlapFriends;
    }
  }
  return scores;
}

function calcVisitorScore(visitors, friends, scores = {}) {
  visitors.map(visitor => {
    if (friends.includes(visitor)) {
      return;
    }
    if (!scores[visitor]) {
      return scores[visitor] = 1;
    }
    return scores[visitor] += 1;
  })
  return scores;
}

function calcRecommendedScore (user, relationships, visitor) {
  let scores = calcFriendScore(user, relationships);
  scores = calcVisitorScore(visitor, relationships[user], scores);
  return Object.fromEntries(Object.entries(scores).sort(([a, ], [b, ]) => a - b));
}

function problem7(user, friends, visitors) {
  const MAXIMUM_NUM = 5;
  const relationships = getRelationships(friends);
  const recommendedScores = calcRecommendedScore(user, relationships, visitors);
  const sortedScores = Object.fromEntries(Object.entries(recommendedScores).sort(([, a], [, b]) => b - a));
  return Object.keys(sortedScores).slice(0, MAXIMUM_NUM + 1);
}

module.exports = problem7;
