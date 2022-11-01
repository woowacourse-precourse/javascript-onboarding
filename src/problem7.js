function problem7(user, friends, visitors) {
  let recommendation = [];

  const { friendsYouDoNotKnow, visitorsYoDoNotKnow } = setThreeGroups(
    user,
    friends,
    visitors
  );

  const obj1 = getNamesWithScores(friendsYouDoNotKnow.flat(), 10);
  const obj2 = getNamesWithScores(visitorsYoDoNotKnow, 1);

  const result = new Set();
  for (let i = 0; i < friendsYouDoNotKnow.length; i++) {
    result.add(...friendsYouDoNotKnow[i]);
  }
  for (let i = 0; i < visitorsYoDoNotKnow.length; i++) {
    result.add(visitorsYoDoNotKnow[i]);
  }

  recommendation = Array.from(result).filter((e) => Boolean(e));

  return recommendation;
}

function getFriendsYouAlreadyKnow(user, friends) {
  const friendsYouAlreadyKnow = [];

  friends.forEach((pair) => {
    if (pair.includes(user)) {
      friendsYouAlreadyKnow.push(...pair);
      for (let i = 0; i < friendsYouAlreadyKnow.length; i++) {
        if (friendsYouAlreadyKnow[i] === user) {
          friendsYouAlreadyKnow.splice(i, 1);
          i--;
        }
      }
    }
  });

  return friendsYouAlreadyKnow;
}

function setThreeGroups(user, friends, visitors) {
  const currentFriends = getFriendsYouAlreadyKnow(user, friends);
  const friendsYouDoNotKnow = friends.map((friend) =>
    friend.filter((e) => !currentFriends.includes(e)).filter((e) => e !== user)
  );
  const visitorsYoDoNotKnow = visitors.filter(
    (e) => !currentFriends.includes(e)
  );

  return { friendsYouDoNotKnow, visitorsYoDoNotKnow };
}

function getNamesWithScores(names, score) {
  const obj = {};

  names.forEach((name) => {
    if (obj[name]) {
      obj[name] += 1 * score;
    } else {
      obj[name] = 1 * score;
    }
  });

  return obj;
}

module.exports = problem7;

//expected: ["andole", "jun", "bedi"]
console.log(
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
  )
);
