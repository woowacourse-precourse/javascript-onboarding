const getFriendsShareScore = (user, friends, friendsMap) => {
  friends.map((friend) => {
    if (friend.includes(user)) {
      for (let f of friend) {
        friendsMap.set(f, 0);
      }
    }
    else {
      for (let a of friend) {
        friendsMap.set(a, 10);
      }
    }
  });

  return friendsMap;
};

const problem7 = (user, friends, visitors) => {
  let friendsMap = new Map();
  friendsMap = getFriendsShareScore(user, friends, friendsMap);
};

module.exports = problem7;
