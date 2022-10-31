const take = (limit, iter) => {
  const res = [];

  for (const v of iter) {
    res.push(v);
    if (res.length === limit) return res;
  }
  return res;
};

const extractUserFriends = (user, friends) =>
  friends
    .filter((friend) => friend.includes(user))
    .flat()
    .filter((friend) => friend !== user);

const extractTwoDegreeFriends = (user, friends) => {
  const twoDegreeFriends = [];
  const userExcludedFriends = friends.filter(
    (friend) => !friend.includes(user)
  );
  for (const userFriend of extractUserFriends(user, friends)) {
    twoDegreeFriends.push(
      userExcludedFriends
        .filter((friend) => friend.includes(userFriend))
        .flat()
        .filter((friend) => friend !== userFriend)
    );
  }
  return twoDegreeFriends.flat();
};

function problem7(user, friends, visitors) {
  const friendScore = {};

  const userFriends = extractUserFriends(user, friends);

  const twoDegreeFriends = extractTwoDegreeFriends(user, friends);

  for (const friend of twoDegreeFriends) {
    if (friend in friendScore) {
      friendScore[friend] += 10;
    } else {
      friendScore[friend] = 10;
    }
  }

  for (const visitor of visitors) {
    if (visitor in friendScore) {
      friendScore[visitor] += 1;
    } else {
      friendScore[visitor] = 1;
    }
  }

  const recommendedFriends = take(
    5,
    Object.entries(friendScore)
      .filter(([friend, _]) => !userFriends.includes(friend))
      .sort(([friendA, scoreA], [friendB, scoreB]) => {
        if (friendA < friendB) return -1;
        return 1;
      })
      .sort(([friendA, scoreA], [friendB, scoreB]) => scoreB - scoreA)
      .map(([friend, _]) => friend)
  );

  return recommendedFriends;
}

module.exports = problem7;
