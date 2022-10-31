function problem7(user, friends, visitors) {
  let answer = [];

  const friendsList = new Map();
  const pointList = new Map();
  const friendsOfFriendList = new Set();

  friends.map(([a, b]) => {
    friendsList.set(a, [...(friendsList.get(a) || []), b]);
    friendsList.set(b, [...(friendsList.get(b) || []), a]);
  });

  const myFriends = friendsList.get(user);

  myFriends.map((friend) => {
    let friendsOfFriend = friendsList.get(friend);
    friendsOfFriend.map((one) => {
      if (one !== user) {
        friendsOfFriendList.add(one);
        pointList.set(one, (pointList.get(one) || 0) + 10);
      }
    });
  });

  visitors.map((one) => {
    if (!myFriends.includes(one))
      pointList.set(one, (pointList.get(one) || 0) + 1);
  });

  const result = Array.from(pointList.entries());
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
