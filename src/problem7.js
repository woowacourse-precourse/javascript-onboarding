function problem7(user, friends, visitors) {
  var answer = [];
  let cntFriends = 0;
  let listFriendship = [];
  listFriendship[0] = [];
  let score = new Map();
  score.set(user, -1);
  let numberOfFriend = new Map();
  numberOfFriend.set(user, cntFriends);
  cntFriends++;

  return answer;
}

module.exports = problem7;
