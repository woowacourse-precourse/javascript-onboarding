function problem7(user, friends, visitors) {
  var answer;

  let friendList = new Map();
  let recommend = new Map();

  for (let i = 0; i < friends.length; i++) {
    addFriend(friendList, friends[i][0], friends[i][1]);
    addFriend(friendList, friends[i][1], friends[i][0]);
  }

  for (let friendId of friendList.get(user)) {
    for (let snsId of friendList.get(friendId)) {
      if (user !== snsId) friendPoint(recommend, snsId);
    }
  }

  return answer;
}

function addFriend(friendList, friend1, friend2) {
  if (friendList.get(friend1) !== undefined) {
    friendList.set(friend1, [...friendList.get(friend1), friend2]);
  } else friendList.set(friend1, [friend2]);
}

function friendPoint(recommend, snsId) {
  if (recommend.get(snsId) !== undefined) {
    recommend.set(snsId, recommend.get(snsId) + 10);
  } else recommend.set(snsId, 10);
}

module.exports = problem7;
