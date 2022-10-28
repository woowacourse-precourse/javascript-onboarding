function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

// 기능 1번
const setRelationshipEachOther = (eachOtherFriend, relationshipTable) => {
  const [friendA, friendB] = eachOtherFriend;
  relationshipTable[friendA] = [...(relationshipTable[friendA] || []), friendB];
  relationshipTable[friendB] = [...(relationshipTable[friendB] || []), friendA];
};

const setRelationshipAll = (friends, relationshipTable) => {
  for (const friend of friends) {
    setRelationshipEachOther(friend, relationshipTable);
  }
};

module.exports = problem7;
