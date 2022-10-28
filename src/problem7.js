function createFriendsMap(friends) {
  const frinedsMap = new Map();

  friends.forEach(([userA, userB]) => {
    frinedsMap.set(
      userA,
      frinedsMap.has(userA) ? [...frinedsMap.get(userA), userB] : [userB]
    );

    frinedsMap.set(
      userB,
      frinedsMap.has(userB) ? [...frinedsMap.get(userB), userA] : [userA]
    );
  });

  return frinedsMap;
}

function isAlreadyFriend({ user, friend, friendsMap }) {
  if (!friendsMap.has(user)) {
    return false;
  }

  if (friendsMap.get(user).includes(friend)) {
    return true;
  }

  return false;
}

function isValidScore(score) {
  const MIN_SCORE = 0;

  return score > MIN_SCORE;
}

function computeFriendScoreBySerperation({ user, friendsMap }) {
  const FRIEND_SCORE = 10;
  const friendsHasScore = new Map();

  const friendsOfUser = friendsMap.get(user);
  const twoDegreesOfSeperation = friendsOfUser.map((friend) =>
    friendsMap.get(friend).filter((name) => name !== user)
  );

  twoDegreesOfSeperation.forEach((friendList) =>
    friendList.forEach((friend) =>
      friendsHasScore.has(friend)
        ? friendsHasScore.set(
            friend,
            friendsHasScore.get(friend) + FRIEND_SCORE
          )
        : friendsHasScore.set(friend, FRIEND_SCORE)
    )
  );

  return friendsHasScore;
}

function computeFriendScoreByVisiting(visitors) {
  const VISITING_SCORE = 1;
  const friendsHasScore = new Map();

  visitors.forEach((visitor) =>
    friendsHasScore.has(visitor)
      ? friendsHasScore.set(
          visitor,
          friendsHasScore.get(visitor) + VISITING_SCORE
        )
      : friendsHasScore.set(visitor, VISITING_SCORE)
  );

  return friendsHasScore;
}

function computeTotalFriendScore(...friendScores) {
  const friendScore = new Map();

  friendScores.forEach((scores) =>
    scores.forEach((score, userName) => {
      friendScore.set(
        userName,
        friendScore.has(userName) ? friendScore.get(userName) + score : score
      );
    })
  );

  return friendScore;
}

function cutListByComparison(compareFunction, array, maxCount = 5) {
  return array.sort(compareFunction).slice(0, maxCount);
}

function problem7(user, friends, visitors) {
  const MAX_COUNT = 5;
  const friendsMap = createFriendsMap(friends);

  const totalFriendScoreMap = computeTotalFriendScore(
    computeFriendScoreBySerperation({
      user,
      friendsMap,
    }),
    computeFriendScoreByVisiting(visitors)
  );

  const filteredFriedScores = [...totalFriendScoreMap].filter(
    ([friend, score]) =>
      !isAlreadyFriend({ user, friend, friendsMap }) && isValidScore(score)
  );

  const slicedTotalFriendScore = cutListByComparison(
    ([nameA, scoreA], [nameB, scoreB]) =>
      scoreB - scoreA || nameA.localeCompare(nameB),
    filteredFriedScores,
    MAX_COUNT
  );

  return slicedTotalFriendScore.map(([name]) => name);
}

module.exports = problem7;
