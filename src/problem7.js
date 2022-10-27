function problem7(user, friends, visitors) {
  var answer;
  const userInfo = new Map();

  for (let i = 0; i < friends.length; i++) {
    let first = friends[i][0];
    let second = friends[i][1];

    if (userInfo.has(first)) {
      userInfo.set(first, {
        friendship: [...userInfo.get(first).friendship, second],
        score: 0,
      });
    } else {
      userInfo.set(first, { friendship: [second], score: 0 });
    }

    if (userInfo.has(second)) {
      userInfo.set(second, {
        friendship: [...userInfo.get(second).friendship, first],
        score: 0,
      });
    } else {
      userInfo.set(second, { friendship: [first], score: 0 });
    }
  }

  return answer;
}

module.exports = problem7;
