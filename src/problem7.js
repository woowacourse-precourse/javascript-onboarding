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

function getRelationScores(user, friends) {
  const relations = getRelations(friends);
  const relationScores = Object.keys(relations).reduce((acc, cur) => {
    if (cur === user) {
      return acc;
    }

    const acquaintances = relations[cur].filter((friend) =>
      relations[user].includes(friend)
    );
    const score = acquaintances.length * 10;
    acc[cur] = score;

    return acc;
  }, {});

  return relationScores;
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
  const relationScores = getRelationScores(user, friends);
  const visitorScores = getVisitorScores(visitors);

  console.log(relationScores, visitorScores);
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
  console.log(problem7(user, friends, visitors));
}

test();
