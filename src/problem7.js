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
    scores[name] = 10 * overlapFriends;
  }
  return scores;
}

function problem7(user, friends, visitors) {
  const relationships = getRelationships(friends);
}

module.exports = problem7;
