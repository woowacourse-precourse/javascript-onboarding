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

  let userFriendship = userInfo.get(user).friendship;

  for (let i = 0; i < userFriendship.length; i++) {
    const realatedUsers = userInfo.get(userFriendship[i]).friendship;

    userInfo.set(userFriendship[i], { friendship: realatedUsers, score: -100 });

    for (let j = 0; j < realatedUsers.length; j++) {
      if (realatedUsers[j] === user) continue;
      const realatedUserFriendship = userInfo.get(realatedUsers[j]).friendship;
      const realatedUserScore = userInfo.get(realatedUsers[j]).score;
      if (realatedUserScore < 0) continue;
      userInfo.set(realatedUsers[j], {
        friendship: realatedUserFriendship,
        score: realatedUserScore + 10,
      });
    }
  }

  userInfo.forEach((value, key, map) => {
    console.log(`${key} : ${value.score}`);
  });

  return answer;
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;
