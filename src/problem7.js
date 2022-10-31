const MAX_COUNT_RECOMMENDED_FRIEND = 5;

function problem7(user, friends, visitors) {
  var answer;
  var resultMap = new Map();
  var userFriends = getUserFriends(user, friends);
  var interWithUserFriends, friendship, recommededFriend, score;

  for (var i = 0; i < friends.length; i++) {
    /* 사용자 친구 목록과의 교집합 */
    friendship = friends[i];
    interWithUserFriends = getInterWithUserFreinds(friendship, userFriends);

    /* 추천 점수 10점 */

    if (interWithUserFreinds.length === 1) {
      // 둘 중의 한명만이 사용자의 친구인 경우
      score = 10;

      recommendedFriend = userFriends.includes(friendship[0])
        ? friendship[1]
        : friendship[0];

      resultMap.has(recommendedFriend)
        ? resultMap.set(
            recommendedFriend,
            resultMap.get(recommendedFriend) + score
          )
        : resultMap.set(recommendedFriend, score);
    }
  }

  /* 추천 점수 1점 */

  var notUserFriends = visitors.filter(
    (element) => !userFriends.includes(element)
  );

  for (var i = 0; i < notUserFriends.length; i++) {
    recommededFriend = notUserFriends[i];
    score = 1;

    resultMap.has(recommededFriend)
      ? resultMap.set(recommededFriend, resultMap.get(recommededFriend) + score)
      : resultMap.set(recommededFriend, score);
  }

  resultMap = sortByValue(resultMap);
  answer = getRecommendedFriends(resultMap);

  if (answer.length > MAX_COUNT_RECOMMENDED_FRIEND)
    answer = getMaxRecommendedFriends(answer);

  return answer;
}

function getInterWithUserFreinds(friend, userFriends) {
  return friend.filter((element) => userFriends.includes(element));
}

function sortByValue(resultMap) {
  return new Map(
    [...resultMap].sort((a, b) => {
      if (b[1] > a[1]) return 1;
      else if (a[1] === b[1]) return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      else if (a[1] > b[1]) return -1;
    })
  );
}
function convertT(resultMap) {
  return Array.from(resultMap.keys());
}

function getUserFriends(user, friends) {
  var userFriends = [user];
  var userFriendRelationship = getUserFriendRelationship(user, friends);

  for (var i = 0; i < userFriendRelationship.length; i++) {
    var userFriens = userFriendRelationship[i].filter(
      (element) => element !== user
    );
    userFriends.push(userFriens.join());
  }

  return userFriends;
}

function getUserFriendRelationship(user, friends) {
  return friends.filter((element) => element.includes(user));
}

function getMaxRecommendedFriends(answer) {
  return answer.slice(0, MAX_COUNT_RECOMMENDED_FRIEND);
}

module.exports = problem7;
