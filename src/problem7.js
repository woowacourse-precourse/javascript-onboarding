function getDirectFriends(user, friends) {
  const directFriends = [];

  friends.forEach((relationship) => {
    relationship.includes(user) &&
      directFriends.push(relationship[1 - relationship.indexOf(user)]);
  });

  return directFriends;
}

function problem7(user, friends, visitors) {
  const directFriends = getDirectFriends(user, friends);

  return;
}

module.exports = problem7;
