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

const computeFriendScore = ({ list, scoreMap, type }) => {
  const score = {
    friend: FRIEND_SCORE,
    visit: VISITING_SCORE,
  };

  list.forEach((item1, item2) => {
    const key = (score[type] && item1) || item2;
    const currentScore = score[type] || item1;

    scoreMap.has(key)
      ? scoreMap.set(key, scoreMap.get(key) + currentScore)
      : scoreMap.set(key, currentScore);
  });
};

const computeFriendScoreBySerperation = ({ user, friendsMap }) => {
  const friendsHasScore = new Map();

  const friendsOfUser = friendsMap.get(user);
  const friendsOfFriend = friendsOfUser.map((friend) =>
    friendsMap.get(friend).filter((name) => name !== user)
  );

  friendsOfFriend.forEach((friends) =>
    computeFriendScore({
      list: friends,
      scoreMap: friendsHasScore,
      type: "friend",
    })
  );

  return friendsHasScore;
};

const computeFriendScoreByVisiting = (visitors) => {
  const friendsHasScore = new Map();
  computeFriendScore({
    list: visitors,
    scoreMap: friendsHasScore,
    type: "visit",
  });

  return friendsHasScore;
};

const computeTotalFriendScore = (...friendScores) => {
  const totalScore = new Map();

  friendScores.forEach((friendScore) =>
    computeFriendScore({
      type: "total",
      list: friendScore,
      scoreMap: totalScore,
    })
  );

  return totalScore;
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
