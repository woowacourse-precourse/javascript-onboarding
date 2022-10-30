const { val } = require("jshint/src/options");

function problem7(user, friends, visitors) {
  var answer;
  var resultMap = new Map();
  var userFriends = getUserFriends(user, friends);

  for (var i = 0; i < friends.length; i++) {
    var interWithUserFreinds = friends[i].filter((element) =>
      userFriends.includes(element)
    ); // 사용자 친구 목록과의 교집합

    // 추천 점수 10점, 둘 중의 한명은 사용자 친구인 경우
    if (interWithUserFreinds.length === 1) {
      var friend = friends[i][0];
      var recommendedFriend;
      var score = 10;

      if (userFriends.includes(friend)) {
        recommendedFriend = friends[i][1];
      } else {
        recommendedFriend = friends[i][0];
      }

      if (resultMap.has(recommendedFriend)) {
        resultMap.set(
          recommendedFriend,
          resultMap.get(recommendedFriend) + score
        );
        continue;
      }

      resultMap.set(recommendedFriend, score);
    }
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
