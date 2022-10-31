function getAllIdFriendsList(friends) {
  const allIdFriendsList = {};

  friends.forEach((friend) => {
    const [id_a, id_b] = friend;
    if (!allIdFriendsList.hasOwnProperty(id_a)) {
      allIdFriendsList[id_a] = [id_b];
    } else {
      allIdFriendsList[id_a].push(id_b);
    }
    if (!allIdFriendsList.hasOwnProperty(id_b)) {
      allIdFriendsList[id_b] = [id_a];
    } else {
      allIdFriendsList[id_b].push(id_a);
    }
  });

  return allIdFriendsList;
}

function getFriendRecommendationScores(user, allIdFriendsList, visitors) {
  const friendRecommendationScores = {};
  const userFriends = allIdFriendsList[user] || [];

  for (const [id, friends] of Object.entries(allIdFriendsList)) {
    if (id === user || userFriends.includes(id)) {
      continue;
    }

    friends.forEach((friend) => {
      if (userFriends.includes(friend)) {
        if (friendRecommendationScores.hasOwnProperty(id)) {
          friendRecommendationScores[id] += 10;
        } else {
          friendRecommendationScores[id] = 10;
        }
      }
    });
  }

  visitors.forEach((visitorId) => {
    if (!userFriends.includes(visitorId)) {
      if (friendRecommendationScores.hasOwnProperty(visitorId)) {
        friendRecommendationScores[visitorId] += 1;
      } else {
        friendRecommendationScores[visitorId] = 1;
      }
    }
  });

  return friendRecommendationScores;
}

function getSortedFriendRecommendationScoresArray(friendRecommendationScores) {
  const sortedFriendRecommendationScoresArray = Object.entries(
    friendRecommendationScores
  ).sort((id_score_a, id_score_b) => {
    const [id_a, score_a] = id_score_a;
    const [id_b, score_b] = id_score_b;

    if (score_a > score_b) {
      return -1;
    } else if (score_a < score_b) {
      return 1;
    } else {
      if (id_a < id_b) {
        return -1;
      } else if (id_a > id_b) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return sortedFriendRecommendationScoresArray;
}

function getTopFiveRecommendationFriendIds(
  sortedFriendRecommendationScoresArray
) {
  const topFiveRecommendationFriendIds = sortedFriendRecommendationScoresArray
    .map((id_score) => id_score[0])
    .slice(0, 5);

  return topFiveRecommendationFriendIds;
}

function problem7(user, friends, visitors) {
  const allIdFriendsList = getAllIdFriendsList(friends);
  const friendRecommendationScores = getFriendRecommendationScores(
    user,
    allIdFriendsList,
    visitors
  );
  const sortedFriendRecommendationScoresArray =
    getSortedFriendRecommendationScoresArray(friendRecommendationScores);

  const answer = getTopFiveRecommendationFriendIds(
    sortedFriendRecommendationScoresArray
  );

  return answer;
}

module.exports = problem7;
