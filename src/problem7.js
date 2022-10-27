function createFriendsMap(friends) {
  const frinedsMap = new Map();

  friends.forEach(([userA, userB]) => {
    frinedsMap.set(
      userA,
      frinedsMap.has(userA) ? [...frinedsMap.get(userA), userB] : [userB]
    );

    frinedsMap.set(
      userB,
      frinedsMap.has(userB) ? [...frinedsMap.get(userB), userA] : [userA]
    );
  });

  return frinedsMap;
}

function isAlreadyFriend({ user, friend, friendsMap }) {
  if (!friendsMap.has(user)) {
    return false;
  }

  if (friendsMap.get(user).includes(friend)) {
    return true;
  }

  return false;
}

function problem7(user, friends, visitors) {
  var answer;

  const friendsMap = createFriendsMap(friends);
  console.log(isAlreadyFriend({ user, friendsMap, friend: "jun" }));

  return answer;
}

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

module.exports = problem7;
