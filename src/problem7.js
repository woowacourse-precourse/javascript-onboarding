function problem7(user, friends, visitors) {
  var answer = [];

  const friendsMap = new Map();
  const pointMap = new Map();
  const friendsList = new Set();

  friends.map(([a, b]) => {
    friendsMap.set(a, [...(friendsMap.get(a) || []), b]);
    friendsMap.set(b, [...(friendsMap.get(b) || []), a]);
  });

  const myFriends = friendsMap.get(user);

  myFriends.map((friend) => {
    let friendsOfFriend = friendsMap.get(friend);
    friendsOfFriend.map((one) => {
      if (one !== user) {
        friendsList.add(one);
        pointMap.set(one, (pointMap.get(one) || 0) + 10);
      }
    });
  });

  visitors.map((one) => {
    if (!myFriends.includes(one))
      pointMap.set(one, (pointMap.get(one) || 0) + 1);
  });

  const result = Array.from(pointMap.entries());
  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return b[1] - a[1];
    }
  });

  result.map(([name, point]) => {
    answer.push(name);
  });

  return answer.slice(0, 5);
}

module.exports = problem7;
