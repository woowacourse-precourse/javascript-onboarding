function findUserFriends(user, friends) {
  const userRelations = friends.filter((friend) => friend.includes(user));
  const userFriends = userRelations.map((relation) =>
    relation.find((person) => person !== user)
  );

  return userFriends;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

function test() {
  const user = 'mrko';
  const friends = [
    ['donut', 'andole'],
    ['donut', 'jun'],
    ['donut', 'mrko'],
    ['shakevan', 'andole'],
    ['shakevan', 'jun'],
    ['shakevan', 'mrko'],
  ];

  console.log(findUserFriends(user, friends));
}

test();
