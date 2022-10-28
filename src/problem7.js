function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function makeFriendsTable(friends) {
  const friendTable = {};
  for (let [friendA, friendB] of friends) {
    addFriendToTable(friendTable, friendA, friendB);
  }

  return friendTable;
}

function addFriendToTable(friendTable, friendA, friendB) {
  friendTable[friendA]
      ? friendTable[friendA].add(friendB)
      : (friendTable[friendA] = new Set([friendB]));

  friendTable[friendB]
      ? friendTable[friendB].add(friendA)
      : (friendTable[friendB] = new Set([friendA]));
}

module.exports = problem7;
