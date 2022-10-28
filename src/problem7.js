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

function findFriendFollower(user, userFriendObject, friends) {
  const userFriends = Object.keys(userFriendObject);
  friends = friends.filter(friend => !friend.includes(user));
  friends.forEach(friend => {
    if (friend.some(person => userFriends.includes(person))) {
      try {
        userFriendObject[friend[0]].push(friend[1]);
      } catch {
        userFriendObject[friend[1]].push(friend[0]);
      }
    }
  });
}

function problem7(user, friends, visitors) {
  var answer;
  const userFriendObject = createUserFriendObject(user, friends);
  findFriendFollower(user, userFriendObject, friends);
  return answer;
}

module.exports = problem7;
