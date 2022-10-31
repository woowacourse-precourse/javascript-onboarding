function problem7(user, friends, visitors) {
  var answer;

  let scores = {};

  function getUserFriend(user, friends) {
    let _userFriends = [];
    friends.forEach((friendship) => {
      if (friendship.includes(user)) {
        friendship.forEach((friendship) => {
          if (friendship != user) _userFriends.push(friendship);
        });
      }
    });
    return _userFriends;
  }
  let userFriends = getUserFriend(user, friends);

  return answer;
}

module.exports = problem7;
