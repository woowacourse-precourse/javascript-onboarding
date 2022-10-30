function problem7(user, friends, visitors) {
  const SCORE = { mutualFriend: 10, visitor: 1 };

  const recommendationFriends = new Map();
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
      SCORE.mutualFriend
    );
  });

  visitors.map((visitor) => {
    if (visitor !== user && !alreadyFriends.includes(visitor)) {
      addRecommendationFriends(recommendationFriends, visitor, SCORE.visitor);
    }
  });

  const answerTopFive = descendingSort(recommendationFriends);
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

function descendingSort(recommendationFriends) {
  return new Map(
    [...recommendationFriends.entries()].sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
  );
}

module.exports = problem7;
