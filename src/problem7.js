const { val } = require("jshint/src/options");

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

      recommededFriend = userFriends.includes(friend)
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

  return answer;
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

module.exports = problem7;
