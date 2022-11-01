const MAX_COUNT = 5;
const VISITING_SCORE = 1;
const FRIEND_SCORE = 10;
const MIN_VALID_SCORE = 0;

const addFriendToFriendMap = ({ user, friend, friendsMap }) => {
  friendsMap.set(
    user,
    friendsMap.has(user) ? [...friendsMap.get(user), friend] : [friend]
  );
};

const createFriendsMap = (friends) => {
  const friendsMap = new Map();

  friends.forEach(([userA, userB]) => {
    addFriendToFriendMap({ user: userA, friend: userB, friendsMap });
    addFriendToFriendMap({ user: userB, friend: userA, friendsMap });
  });

  return friendsMap;
};

const isAlreadyFriend = ({ user, friend, friendsMap }) => {
  if (!friendsMap.has(user)) {
    return false;
  }

  const friendsOfUser = friendsMap.get(user);
  if (friendsOfUser.includes(friend)) {
    return true;
  }

  return false;
};

const isValidScore = (score) => {
  return score >= MIN_VALID_SCORE;
};

const computeFriendScoreBySerperation = ({ user, friendsMap }) => {
  const friendsHasScore = new Map();

  const friendsOfUser = friendsMap.get(user);
  const friendsOfFriend = friendsOfUser.map((friend) =>
    friendsMap.get(friend).filter((name) => name !== user)
  );

  friendsOfFriend.forEach((friends) =>
    friends.forEach((friend) =>
      friendsHasScore.has(friend)
        ? friendsHasScore.set(
            friend,
            friendsHasScore.get(friend) + FRIEND_SCORE
          )
        : friendsHasScore.set(friend, FRIEND_SCORE)
    )
  );

  return friendsHasScore;
};

const computeFriendScoreByVisiting = (visitors) => {
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
};

const computeTotalFriendScore = (...friendScores) => {
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
};

const getValidFriendRecommendation = ({ user, friendsMap, scoreMap }) => {
  return [...scoreMap].filter(
    ([friend, score]) =>
      !isAlreadyFriend({ user, friend, friendsMap }) && isValidScore(score)
  );
};

const sortFriendList = (friendScoreList) => {
  return friendScoreList.sort(
    ([nameA, scoreA], [nameB, scoreB]) =>
      scoreB - scoreA || nameA.localeCompare(nameB)
  );
};

const problem7 = (user, friends, visitors) => {
  const friendsMap = createFriendsMap(friends);

  const friendsScoreMap = computeTotalFriendScore(
    computeFriendScoreBySerperation({
      user,
      friendsMap,
    }),
    computeFriendScoreByVisiting(visitors)
  );

  const validFriends = getValidFriendRecommendation({
    user,
    friendsMap,
    scoreMap: friendsScoreMap,
  });

  const recommendedFriends = sortFriendList(validFriends)
    .slice(0, MAX_COUNT)
    .map(([name]) => name);

  return recommendedFriends;
};

module.exports = problem7;
