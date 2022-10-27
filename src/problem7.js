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
    mapRelations(f1);
    mapRelations(f2);
  })
  return relationships;
}

function problem7(user, friends, visitors) {
  const relationships = getRelationships(friends);
}

module.exports = problem7;
