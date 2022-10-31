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

  function getVisitScore(visitors) {
    visitors.forEach((visitor) => {
      scores[visitor] = scores[visitor] + 1 || 1;
    });
  }
  getVisitScore(visitors);

  function removeFollowback() {
    userFriends.forEach((friend) => {
      delete scores[friend];
    });
  }
  removeFollowback();

  function getAnswer() {
    scores = Object.entries(scores);
    scores.sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      }
      return a[0].localeCompare(b[0]);
    });
    if (scores.length > 5) {
      while (scores.length !== 5) {
        scores.pop();
      }
    }
    answer = scores.map((element) => {
      return element[0];
    });
  }

  getAnswer();

  return answer;
}

module.exports = problem7;
