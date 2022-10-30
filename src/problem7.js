function problem7(user, friends, visitors) {
  const scoreObj = {};

  const userFriendList = friends
    .filter((item) => item.includes(user))
    .map((value) => {
      if (value[0] === user) {
        return value[1];
      } else return value[0];
    });
}

module.exports = problem7;
