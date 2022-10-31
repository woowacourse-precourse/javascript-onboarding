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

  function getNetworkScore(user, friends, userFriends) {
    userFriends.forEach((friend) => {
      friends.forEach((friendship) => {
        if (friendship.includes(friend) && !friendship.includes(user)) {
          let other = friendship[0] === friend ? friendship[1] : friendship[0];
          scores[other] = scores[other] + 10 || 10;
        }
      });
    });
  }
  getNetworkScore(user, friends, userFriends);

  return answer;
}

module.exports = problem7;
