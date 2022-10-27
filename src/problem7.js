function findUserFriends(user, friends) {
  const userRelations = friends.filter((friend) => friend.includes(user));
  const userFriends = userRelations.map((relation) =>
    relation.find((person) => person !== user)
  );

  return userFriends;
}

function getRelations(friends) {
  const relations = friends.reduce((acc, cur) => {
    const [crewA, crewB] = cur;

    acc[crewA] = [...(acc[crewA] || []), crewB];
    acc[crewB] = [...(acc[crewB] || []), crewA];

    return acc;
  }, {});

  return relations;
}

function getVisitorScores(visitors) {
  const visitorScores = visitors.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }

    acc[cur] += 1;

    return acc;
  }, {});

  return visitorScores;
}

function problem7(user, friends, visitors) {
  const crewScores = {};
  const relations = getRelations(friends);

  Object.keys(relations).forEach((crew) => {
    if (crew === user) {
      return;
    }

    const acquaintances = relations[crew].filter((friend) =>
      relations[user].includes(friend)
    );
    const score = acquaintances.length * 10;
    crewScores[crew] = score;
  });

  return crewScores;
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
  const visitors = ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'];

  console.log(findUserFriends(user, friends));
  console.log(getRelations(friends));
  console.log(getVisitorScores(visitors));
  console.log(problem7(user, friends, []));
}

test();
