function problem7(user, friends, visitors) {
  const userFriends = friends
    .filter((friend) => friend.includes(user))
    .flatMap((friend) => friend.filter((id) => id !== user));

  const friendsOfUserFriends = userFriends
    .flatMap((userFriend) =>
      friends
        .filter((friend) => friend.includes(userFriend))
        .flatMap((friend) => friend.filter((id) => id !== userFriend && id !== user)),
    )
    .filter((id) => !userFriends.includes(id));

  const strangeVisitors = visitors.filter(
    (visitor) => visitor !== user && !userFriends.includes(visitor),
  );

  const score = {};
  const getScore = (people, point) => {
    people.forEach((person) => {
      score[person] ? (score[person] += point) : (score[person] = point);
    });
  };

  getScore(friendsOfUserFriends, 10);
  getScore(strangeVisitors, 1);
}

module.exports = problem7;
