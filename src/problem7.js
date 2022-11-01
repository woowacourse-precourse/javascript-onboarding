function problem7(user, friends, visitors) {
  var answer;

  let friend = [];
  let nearFriend = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] === user) {
      friend.push(friends[i][0]);
    } else {
      nearFriend.push(friends[i][1]);
    }
  }

  return answer;
}

module.exports = problem7;
