const getUsersFriend = (user, friends) => {
  const users_friends = [];
  friends.map((friend) => {
    if (friend.includes(user)) {
      users_friends.push(friend[0] === user ? friend[1] : friend[0]);
    }
  });
  return users_friends;
};

const getFriendsShareScore = (user, friends, friendsMap) => {
  const users_friends = getUsersFriend(user, friends);
  users_friends.map((user_friend) => {
    for (const friend of friends) {
      if (friend.includes(user_friend)) {
        const crossed_friend = friend[0] === user_friend ? friend[1] : friend[0];
        if (crossed_friend !== user && !users_friends.includes(crossed_friend)) {
          friendsMap.set(crossed_friend, 10);
        }
        else {
          friendsMap.set(friend[0], 0);
          friendsMap.set(friend[1], 0);
        }
      }
    }
  });

  return friendsMap;
};

const getTimelineVisitedScore = (visitors, friendsMap) => {
  visitors.map((visitor) => {
    if (!friendsMap.has(visitor)) {
      friendsMap.set(visitor,1);
    } else if (friendsMap.get(visitor) !== 0) {
      friendsMap.set(visitor, friendsMap.get(visitor) + 1);
    }
  });

  return friendsMap;
};

const problem7 = (user, friends, visitors) => {
  const result = [];
  let friendsMap = new Map();
  friendsMap = getFriendsShareScore(user, friends, friendsMap);
  friendsMap = getTimelineVisitedScore(visitors, friendsMap);

  friendsMap = [...friendsMap].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    } else {
      return b[1] - a[1];
    }
  });
  console.log(friendsMap)

  friendsMap.forEach((friend) => {
    if (friend[1] !== 0) {
      result.push(friend[0]);
    }
  });

  if (result.length > 5) {
    result.splice(5, );
  }

  return result;
};

module.exports = problem7;
