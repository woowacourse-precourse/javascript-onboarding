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

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
