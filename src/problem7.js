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

// 기능 2번
const getRecommendedFriendList = (userName, relationshipTable) => {
  const friendList = relationshipTable[userName];
  const recommendedFriendList = [];
  for (const friend of friendList) {
    const recommendedFriend = relationshipTable[friend].filter(
      (name) => name !== userName
    );
    recommendedFriendList.push(...recommendedFriend);
  }
  return recommendedFriendList;
};

module.exports = problem7;
