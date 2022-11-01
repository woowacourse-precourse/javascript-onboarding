function problem7(user, friends, visitors) {
  let friendScoreList = new Map();
  

  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let name of friend) {
        friendScoreList.set(name, POINT.WITH_KNOW_FRIEND);
      }
    } else {
      for (let name of friend) {
        friendScoreList.set(name, POINT.USER_FRIEND);
      }
    }
  }
}

const POINT = Object.freeze({
  USER_FRIEND: 0,
  WITH_KNOW_FRIEND: 10,
  TIMELINE_VISITOR: 1,
});

module.exports = problem7;
