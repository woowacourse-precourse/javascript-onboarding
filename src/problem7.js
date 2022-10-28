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

// 기능 3번
const addRecommendedScoreByFriendList = (scoreTable, friendList, addScore) => {
  for (const friendName of friendList) {
    scoreTable[friendName] = (scoreTable[friendName] || 0) + addScore;
  }
};

// 기능 4번
const objectToArray = (obj) => {
  const arr = [];
  for (const key of Object.keys(obj)) {
    arr.push([key, obj[key]]);
  }
  return arr;
};

// 기능 5번
const sortByScore = (scoreArray) => {
  const sortedFriendList = scoreArray.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
  return sortedFriendList;
};

module.exports = problem7;
