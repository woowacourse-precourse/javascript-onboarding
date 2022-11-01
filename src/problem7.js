function problem7(user, friends, visitors) {
  const friendObject = {};

  const userFriends = [
    ...new Set(friends.filter((array) => array.includes(user)).flat()),
  ].filter((friend) => friend !== user);

  userFriends.forEach((v) => (friendObject[v] = []));

  const friendsOfFriends = [...friends].filter((array) =>
    [...userFriends].filter((userFriend) => array.includes(userFriend))
  );

  friendsOfFriends.forEach((friendsOfFriend) => {
    userFriends.forEach((userFriend) => {
      if (
        friendsOfFriend.includes(userFriend) &&
        !friendsOfFriend.includes(user)
      ) {
        friendObject[userFriend].push(
          ...[...friendsOfFriend].filter((v) => v !== userFriend)
        );
      }
    });
  });

  const counter = [];

  const addScore = (array, value, score) => {
    [...array].map((v) => v.name).includes(value)
      ? counter.forEach((obj) => {
          if (obj["name"] === value) {
            obj.score += score;
          }
        })
      : counter.push({ name: value, score: score });
  };

  visitors.forEach((visitor) => {
    if (friendObject[visitor]) {
      friendObject[visitor].forEach((friendsOfFriend) => {
        addScore(counter, friendsOfFriend, 10);
      });
    }

    if (!userFriends.includes(visitor)) {
      addScore(counter, visitor, 1);
    }
  });

  let sortedByValueAsc = counter.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return a.name > b.name ? 1 : -1;
    }
  });

  return [...sortedByValueAsc].map((v) => v.name).splice(0, 5);
}

module.exports = problem7;
