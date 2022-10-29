const getRelationPeople = (friends) => {
  const obj = {};

  for (const [f1, f2] of friends) {
    f1 in obj ? (obj[f1] = [...obj[f1], f2]) : (obj[f1] = [f2]);
    f2 in obj ? (obj[f2] = [...obj[f2], f1]) : (obj[f2] = [f1]);
  }

  return obj;
};

const getVisitorsCnt = (visitors) => {
  const obj = {};

  for (const visitor of visitors) {
    visitor in obj ? (obj[visitor] += 1) : (obj[visitor] = 1);
  }

  return obj;
};

const getNotUserFreinds = (user, relations, vistiedCnt) => {
  const allPeople = [
    ...new Set([...Object.keys(relations), ...Object.keys(vistiedCnt)]),
  ];

  const notUserFreinds = allPeople.filter((person) =>
    checkNotUserFreinds(user, person, relations)
  );

  return notUserFreinds;
};

const checkNotUserFreinds = (user, person, relations) => {
  return person !== user && !relations[user].includes(person);
};

function problem7(user, friends, visitors) {
  const relations = getRelationPeople(friends);
  const vistiedCnt = getVisitorsCnt(visitors);

  const notUserFreinds = getNotUserFreinds(user, relations, vistiedCnt);
}

module.exports = problem7;
