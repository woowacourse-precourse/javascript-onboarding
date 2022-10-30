function getUserFriends(user, friends) {
  const userFriends = [];

  friends.forEach(([firstPerson, secondPerson]) => {
    if(firstPerson === user) userFriends.push(secondPerson);
    if(secondPerson === user) userFriends.push(firstPerson);
  });

  return userFriends;
}

function problem7(user, friends, visitors) {
  var answer;
  const userFriends = getUserFriends(user, friends);
  return answer;
}

module.exports = problem7;
