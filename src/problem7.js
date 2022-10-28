function createUserFriendObject(user, friends) {
  const TOTAL_INDEX = 1;
  const initialFriendObject = {};
  friends.forEach(friend => {
    const userIndex = friend.indexOf(user);

    if (userIndex !== -1) {
      const friendIndex = TOTAL_INDEX - userIndex;
      const friendName = friend[friendIndex];
      initialFriendObject[friendName] = [];
    }
  });

  return initialFriendObject;
}

function problem7(user, friends, visitors) {
  var answer;
  const userFriendObject = createUserFriendObject(user, friends);
  return answer;
}

module.exports = problem7;
