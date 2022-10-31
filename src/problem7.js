function problem7(user, friends, visitors) {
  let recommendation;

  const currentFriends = getFriendsYouAlreadyKnow(user, friends);
  const filtered = friends.map((friend) =>
    friend.filter((e) => !currentFriends.includes(e)).filter((e) => e !== user)
  );
  const filtered2 = visitors.filter((e) => !currentFriends.includes(e));

  const result = new Set();
  for (let i = 0; i < filtered.length; i++) {
    result.add(...filtered[i]);
  }
  for (let i = 0; i < filtered2.length; i++) {
    result.add(filtered2[i]);
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
