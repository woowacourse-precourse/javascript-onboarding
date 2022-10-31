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

    return twoDegreeFriends.flat();
  }
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

  return friendScore;
}

module.exports = problem7;
