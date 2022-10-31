function problem7(user, friends, visitors) {
  let answer;

  const findFriendsOfUser = (user, friends) => {
    let friendsOfUser = [];

    for (let i = 0; i < friends.length; i++) {
      if (friends[i][0] === user) {
        arr.push(friends[i][1]);
      } else if (friends[i][1] === user) {
        arr.push(friends[i][0]);
      }
    }

    return friendsOfUser;
  };

  return;
}

module.exports = problem7;
