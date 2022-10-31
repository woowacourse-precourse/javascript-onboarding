function getRecommendedFriendList({ user, friends, visitors }) {
  const friendInfo = getFriendInfo(friends);
  const recommendScoreInfo = getRecommendScoreInfo({
    user,
    friendInfo,
    visitors,
  });
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

  console.log(recommendScoreInfo);

  return recommendScoreInfo;
}

function calcRecommendScore({ data, type }, recommendScoreInfo) {
  if (type === 'FRIENDS') {
    const { user, friendInfo } = data;
    const userFriends = friendInfo[user];

    Object.entries(friendInfo).forEach(([userId, friends]) => {
      friends.forEach((friendId) => {
        if (userId !== user) {
          if (userFriends.includes(friendId)) {
            if (recommendScoreInfo[userId]) {
              recommendScoreInfo[userId] += 10;
            } else {
              recommendScoreInfo[userId] = 10;
            }
          }
        }
      });
    });
  }

  if (type === 'VISITORS') {
    const { user, visitors } = data;
    visitors.forEach((visitorId) => {
      if (user !== visitorId) {
        if (recommendScoreInfo[visitorId]) {
          recommendScoreInfo[visitorId]++;
        } else {
          recommendScoreInfo[visitorId] = 1;
        }
      }
    });
  }
}

function problem7(user, friends, visitors) {
  const answer = getRecommendedFriendList({ user, friends, visitors });

  return answer;
}

console.log(
  problem7(
    'mrko',
    [
      ['donut', 'andole'],
      ['donut', 'jun'],
      ['donut', 'mrko'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
  ),
);

module.exports = problem7;
