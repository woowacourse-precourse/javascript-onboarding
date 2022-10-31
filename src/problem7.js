function problem7(user, friends, visitors) {
  //친구 관계 배열을 이용해 친구 목록을 생성
  const friendArr = createfriendArr(friends, user);
  const mutualFriendArr = [];
  for (let i = 0; i < friendArr.length; i++) {
    const friend = friendArr[i];
    mutualFriendArr.push(...createfriendArr(friends, friend, friendArr));
    visitors = visitors.filter((visit) => visit !== friend);
  }

//친구 추천 규칙에 따라 점수를 부여
const recommendArr = [
  ...new Set([
    ...mutualFriendArr.filter((visit) => visit !== user),
    ...visitors,
  ]),
];

const scoreArr = createScoreArr(recommendArr, mutualFriendArr, visitors);
return recommendArr
  .sort()
  .sort((a, b) => scoreArr[b] - scoreArr[a])
  .slice(0, 5);
}

const createScoreArr = (recommendArr, mutualFriendArr, visitors) => {
const result = {};
recommendArr.forEach((name) => {
  const friendCount = mutualFriendArr.reduce((count, visit) => {
    if (visit === name) {
      return count + 1;
    } else return count;
  }, 0);

  const visitCount = visitors.reduce((count, visit) => {
    if (visit === name) {
      return count + 1;
    } else return count;
  }, 0);

  const score = friendCount * 10 + visitCount;
  result[name] = score;
});
return result;
};

 //점수 높은 순으로 정렬하여 최대 5명을 반환
 const createfriendArr = (rekatuibshipArr, friendCompare, friendArr = []) => {
  const result = [];
  rekatuibshipArr.forEach((relationship) => {
    if (relationship.includes(friendCompare)) {
      const friendName =
        relationship[relationship.findIndex((name) => name !== friendCompare)];
      if (!friendArr.includes(friendName)) result.push(friendName);
    }
  });
  return result;
};

module.exports = problem7;
