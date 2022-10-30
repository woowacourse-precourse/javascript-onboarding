function problem7(user, friends, visitors) {
  var userAndFriendSet = new Set();
  var hashMap = new Map();

  for (var friend of friends) {
    var [idA, idB] = friend;

    if (friend.includes(user)) {
      userAndFriendSet.add(idA);
      userAndFriendSet.add(idB);
    }

    if (hashMap.has(idA)) {
      var scoreA = hashMap.get(idA);
      hashMap.set(idA, scoreA + 10);
    } else hashMap.set(idA, 10);
    if (hashMap.has(idB)) {
      var scoreB = hashMap.get(idB);
      hashMap.set(idB, scoreB + 10);
    } else hashMap.set(idB, 10);
  }

  for (var visitor of visitors) {
    if (hashMap.has(visitor)) {
      var score = hashMap.get(visitor);
      hashMap.set(visitor, score + 1);
    } else hashMap.set(visitor, 1);
  }

  var answer = [];

  hashMap.forEach((v, k) => {
    if (userAndFriendSet.has(k)) {
      hashMap.delete(k);
    }
  });
  hashMap = new Map([...hashMap.entries()].sort());
  hashMap = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));
  hashMap.forEach((v, k) => {
    answer.push(k);
  });

  return answer;
}

module.exports = problem7;
