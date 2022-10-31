function problem7(user, friends, visitors) {
  const userFriends = findUserFriends(user, friends);
}

const findUserFriends = (user, friends) => {
  return friends
          .filter(([name1, name2]) => name1 === user || name2 === user)
          .map(([name1, name2]) => name1 === user ? name2 : name1);
}

module.exports = problem7;
