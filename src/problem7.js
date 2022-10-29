function problem7(user, friends, visitors) {
  let recommendationFriends = new Map();

  const alreadyFriends = findAlreadyFriends(user, friends);
  const tempRecommendationFriends = findTempRecommendationFriends(
    user,
    friends,
    alreadyFriends
  );

  tempRecommendationFriends.map((tempRecommendationFriend) => {
    addRecommendationFriends(
      recommendationFriends,
      tempRecommendationFriend,
      10
    );
  });

  visitors.map((visitor) => {
    if (visitor !== user && !alreadyFriends.includes(visitor)) {
      addRecommendationFriends(recommendationFriends, visitor, 1);
    }
  });

  //내림차순 정렬
  let answerTopFive = new Map(
    [...recommendationFriends.entries()].sort((a, b) => {
      //value(점수) 값이 같을 경우
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
  );

  // 상위 5개까지만 출력
  return Array.from(answerTopFive.keys()).slice(0, 5);
}

function findAlreadyFriends(user, friends) {
  return friends
    .filter((friend) => friend.includes(user))
    .flat()
    .filter((friend) => friend !== user);
}

function findTempRecommendationFriends(user, friends, alreadyFriends) {
  return friends
    .filter((friend) => !friend.includes(user))
    .filter((friend) => {
      const [friendA, friendB] = friend;
      if (
        (alreadyFriends.includes(friendA) &&
          !alreadyFriends.includes(friendB)) ||
        (alreadyFriends.includes(friendB) && !alreadyFriends.includes(friendA))
      ) {
        return friend;
      }
    })
    .flat()
    .filter((friend) => !alreadyFriends.includes(friend));
}

function addRecommendationFriends(recommendationFriends, friendId, score) {
  if (recommendationFriends.has(friendId)) {
    let recommendationFriendScore = recommendationFriends.get(friendId);
    return recommendationFriends.set(
      friendId,
      recommendationFriendScore + score
    );
  }
  return recommendationFriends.set(friendId, score);
}

module.exports = problem7;
