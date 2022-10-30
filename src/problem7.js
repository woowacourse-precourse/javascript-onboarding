function getUserFriend(user, friends){
  const userInclArr = friends.filter(friend => friend.includes(user));
  const userInclList = userInclArr.reduce(function (acc, cur) {
    return [...acc, ...cur];
  });
  const userFriend = userInclList.filter(v => !v.includes(user));

  return userFriend;
}

function problem7(user, friends, visitors) {
  console.log(getUserFriend(user, friends));
}

module.exports = problem7;
