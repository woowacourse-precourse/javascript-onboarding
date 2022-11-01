function problem7(user, friends, visitors) {
  var answer;
  const user_friends = findFriends(user, friends);
  return answer;
}

function findFriends(user, friends) {
  // user의 친구 찾기.
  const user_friends = new Set();

  friends.map((relation) => {
    const [relation1, relation2] = relation;
    if (relation2 === user) user_friends.add(relation1);
    else if (relation1 === user) user_friends.add(relation2);
  });
  return [...user_friends];
}

module.exports = problem7;
