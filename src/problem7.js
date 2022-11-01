function problem7(user, friends, visitors) {
  const friendMap = new Map();
  friends.forEach(([f1, f2]) => {
    friendMap.set(f1, friendMap.get(f1) ? [...friendMap.get(f1), f2] : [f2]);
    friendMap.set(f2, friendMap.get(f2) ? [...friendMap.get(f2), f1] : [f1]);
  });
}

module.exports = problem7;
