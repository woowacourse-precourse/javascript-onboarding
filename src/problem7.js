const { val } = require("jshint/src/options");

function problem7(user, friends, visitors) {
  var answer;

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
