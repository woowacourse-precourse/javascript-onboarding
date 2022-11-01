function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
}

function getUserFriends(user, friends) {
  const friendsArr = friends.filter((arr) => arr.includes(user) === true);
  return friendsArr.map(([firstName, secondName]) => firstName === user ? secondName : firstName);
}

module.exports = problem7;
