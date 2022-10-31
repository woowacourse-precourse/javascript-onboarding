function problem7(user, friends, visitors) {
  let answer;
  let userFriends = new Set();
  let otherFriends = new Set();

  friends.forEach((friend) => {
    userFriends.add(friend[0]);
    if (friend[1] !== user) {
      otherFriends.add(friend[1]);
    }
  });
  visitors.forEach((visitor) => {
    if (userFriends.has(visitor) === false) {
      otherFriends.add(visitor);
    }
  });

  otherFriends = new Array(...otherFriends).sort();

  let otherFriendsMap = new Map();
  otherFriends.forEach((friend) => otherFriendsMap.set(friend, 0));

  friends.forEach((friend) => {
    if (otherFriendsMap.has(friend[1])) {
      otherFriendsMap.set(friend[1], otherFriendsMap.get(friend[1]) + 10);
    }
  });

  visitors.forEach((friend) => {
    if (otherFriendsMap.has(friend)) {
      otherFriendsMap.set(friend, otherFriendsMap.get(friend) + 1);
    }
  });

  let otherFriendsList = new Array(...otherFriendsMap).sort(
    (x, y) => y[1] - x[1]
  );

  otherFriendsList = otherFriendsList.filter((friend) => friend[1] !== 0);

  answer = otherFriendsList.map((friend) => friend[0]);
  answer = answer.slice(0, 5);

  return answer;
}

module.exports = problem7;
