function problem7(user, friends, visitors) {
  const friendMap = new Map();
  friends.forEach(([f1, f2]) => {
    friendMap.set(f1, friendMap.get(f1) ? [...friendMap.get(f1), f2] : [f2]);
    friendMap.set(f2, friendMap.get(f2) ? [...friendMap.get(f2), f1] : [f1]);
  });

  const friendList = friendMap.get(user);
  const score = {};
  if (friendList) {
    for (let [k, v] of friendMap) {
      if (k !== user && !friendList.includes(k)) {
        score[k] = v.length * 10;
      }
    }
  }
}

module.exports = problem7;
