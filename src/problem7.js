function getRecommendedFriendList({ user, friends, visitors }) {
  const friendInfo = getFriendInfo(friends);
  const recommendScoreInfo = getRecommendScoreInfo({
    user,
    friendInfo,
    visitors,
  });
  const userFriends = friendInfo[user] ?? [];

  return Object.entries(recommendScoreInfo)
    .filter(([id, _]) => !userFriends.includes(id))
    .filter(([_, score]) => score > 0)
    .sort(compare)
    .map(([id, _]) => id)
    .slice(0, 5);
}

function getFriendInfo(friends) {
  const friendInfo = {};

  friends.forEach(([id_A, id_B]) => {
    addFriend({ userId: id_A, friendId: id_B }, friendInfo);
    addFriend({ userId: id_B, friendId: id_A }, friendInfo);
  });

  return friendInfo;
}

function addFriend({ userId, friendId }, friendInfo) {
  if (friendInfo[userId]) {
    friendInfo[userId].push(friendId);
  } else {
    friendInfo[userId] = [friendId];
  }
}

function getRecommendScoreInfo({ user, friendInfo, visitors }) {
  const recommendScoreInfo = {};

  calcRecommendScore(
    { data: { user, friendInfo }, type: 'FRIENDS' },
    recommendScoreInfo,
  );
  calcRecommendScore(
    { data: { user, visitors }, type: 'VISITORS' },
    recommendScoreInfo,
  );

  return recommendScoreInfo;
}

function calcRecommendScore({ data, type }, recommendScoreInfo) {
  if (type === 'FRIENDS') {
    const { user, friendInfo } = data;
    const userFriends = friendInfo[user] ?? [];

    Object.entries(friendInfo).forEach(([userId, friends]) => {
      friends.forEach((friendId) => {
        if (userId !== user && userFriends.includes(friendId)) {
          if (recommendScoreInfo[userId]) {
            recommendScoreInfo[userId] += 10;
          } else {
            recommendScoreInfo[userId] = 10;
          }
        }
      });
    });
  }

  if (type === 'VISITORS') {
    const { user, visitors } = data;

    visitors.forEach((visitorId) => {
      if (visitorId !== user) {
        if (recommendScoreInfo[visitorId]) {
          recommendScoreInfo[visitorId]++;
        } else {
          recommendScoreInfo[visitorId] = 1;
        }
      }
    });
  }
}

function compare([id_A, score_A], [id_B, score_B]) {
  if (score_A === score_B) {
    return id_A > id_B ? 1 : -1;
  }

  return score_B - score_A;
}

function problem7(user, friends, visitors) {
  const answer = getRecommendedFriendList({ user, friends, visitors });

  return answer;
}
