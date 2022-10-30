const MAX_COUNT_RECOMMENDED_FRIEND = 5;

function problem7(user, friends, visitors) {
  var answer;
  var resultMap = new Map();
  var userFriends = getUserFriends(user, friends);
  var recommededFriend, score;

  for (var i = 0; i < friends.length; i++) {
    /* 사용자 친구 목록과의 교집합 */
    var interWithUserFreinds = friends[i].filter((element) =>
      userFriends.includes(element)
    );

    /* 추천 점수 10점 */

    if (interWithUserFreinds.length === 1) {
      // 둘 중의 한명은 사용자 친구인 경우
      var friend = friends[i][0];
      score = 10;

      recommendedFriend = userFriends.includes(friend)
        ? friends[i][1]
        : friends[i][0];

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

  resultMap = new Map(
    [...resultMap].sort((a, b) => {
      if (b[1] > a[1]) return 1;
      else if (a[1] === b[1]) return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      else if (a[1] > b[1]) return -1;
    })
  );

  answer = getRecommendedFriends(resultMap);

  if (answer.length > 5) answer = getMaxRecommendedFriends(answer);

  return answer;
}

function getRecommendedFriends(resultMap) {
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
