function problem7(user, friends, visitors) {
  let allFriendsList = new Map();
  friends.map(([firstFriend, secondFriend]) => {
    allFriendsList.set(
      firstFriend,
      (allFriendsList.get(firstFriend) || []).concat(secondFriend)
    );
    allFriendsList.set(
      secondFriend,
      (allFriendsList.get(secondFriend) || []).concat(firstFriend)
    );
  });

  const scoreCollection = new Map();
  for (let i = 0; i < (allFriendsList.get(user) || []).length; i++) {
    allFriendsList.get(allFriendsList.get(user)[i]).map((friend) => {
      if (!allFriendsList.get(user).includes(friend) && friend !== user) {
        scoreCollection.set(friend, scoreCollection.get(friend) + 10 || 10);
      }
    });
  }

  visitors.map((friend) => {
    if (!(allFriendsList.get(user) || []).includes(friend)) {
      scoreCollection.set(friend, scoreCollection.get(friend) + 1 || 1);
    }
  });

  return [...scoreCollection]
    .sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))
    .map(([nickname, score]) => nickname)
    .slice(0, 5);
}

module.exports = problem7;
