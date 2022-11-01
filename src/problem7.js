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

  for (let i = 0; i < friends.length; i++) {
    let user1 = friends[i][0];
    let user2 = friends[i][1];
    if (!numberOfFriend.has(user1)) {
      numberOfFriend.set(user1, cntFriends);
      listFriendship[cntFriends] = [];
      cntFriends++;
    }
    if (!numberOfFriend.has(user2)) {
      numberOfFriend.set(user2, cntFriends);
      listFriendship[cntFriends] = [];
      cntFriends++;
    }
    listFriendship[numberOfFriend.get(user1)].push(user2);
    listFriendship[numberOfFriend.get(user2)].push(user1);
  }

  return answer;
}

module.exports = problem7;
