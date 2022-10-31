function problem7(user, friends, visitors) {
  const userFriend = findFriend(user, friends);
  const noFriend = findNoFriend(user, friends, userFriend);
}

function findFriend(user, friends) {
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friends[i].includes(user) && friends[i][j] !== user)
        userFriend.push(friends[i][j]);
    }
  }
  return userFriend;
}

function getAllName(friends) {
  const allNameSet = new Set(friends.flat());
  return Array.from(allNameSet);
}

function findNoFriend(user, friends, userFriend) {
  const allName = getAllName(friends);
  return allName.filter((name) => name !== user && !userFriend.includes(name));
}

module.exports = problem7;
