const { val } = require("jshint/src/options");

function problem7(user, friends, visitors) {
  var answer;
  var userFriends = getUserFriends(user, friends);

  for (var i = 0; i < friends.length; i++) {
    var interWithUserFreinds = friends[i].filter((element) =>
      userFriends.includes(element)
    ); // 사용자 친구 목록과의 교집합
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
