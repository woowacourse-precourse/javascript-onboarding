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

function problem7(user, friends, visitors) {
  const relationships = getRelationships(friends);
  const userFriends = relationships[user];
}

module.exports = problem7;
