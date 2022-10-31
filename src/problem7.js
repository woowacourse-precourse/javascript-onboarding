function getRelations(friends) {
  const relations = friends.reduce((acc, cur) => {
    const [crewA, crewB] = cur;

    acc[crewA] = [...(acc[crewA] || []), crewB];
    acc[crewB] = [...(acc[crewB] || []), crewA];

    return acc;
  }, {});

  return relations;
}

function getRelationScores(relations, crews, userFriends) {
  const relationScores = crews.reduce((acc, cur) => {
    const acquaintances = relations[cur].filter((friend) =>
      userFriends.includes(friend)
    );
    const score = acquaintances.length * 10;
    acc[cur] = score;

    return acc;
  }, {});

  return relationScores;
}

function addVisitorScores(visitors, relationScores) {
  const crewScores = { ...relationScores };
  visitors.forEach((visitor) => {
    if (!crewScores[visitor]) {
      crewScores[visitor] = 0;
    }

    crewScores[visitor] += 1;
  });

  return crewScores;
}

function filterValidCrew(crewScores, userFriends) {
  const validCrews = crewScores.filter(
    (crew) => crew[1] !== 0 && !userFriends.includes(crew[0])
  );

  return validCrews;
}

function getSortedCrews(crews) {
  const sortedCrewsByName = crews.sort();
  const sortedCrewsByScore = sortedCrewsByName.sort(
    (prev, cur) => cur[1] - prev[1]
  );
  const sortedCrews = sortedCrewsByScore.map((crew) => crew[0]);

  return sortedCrews;
}

function problem7(user, friends, visitors) {
  const relations = getRelations(friends);

  const userFriends = relations[user];
  const invalidCrews = [...userFriends, user];

  const validRelationCrews = Object.keys(relations).filter(
    (crew) => !invalidCrews.includes(crew)
  );
  const validVisitors = visitors.filter(
    (visitor) => !invalidCrews.includes(visitor)
  );

  const relationScores = getRelationScores(
    relations,
    validRelationCrews,
    userFriends
  );
  const crewScores = addVisitorScores(validVisitors, relationScores);

  const crewScoreArray = Object.entries(crewScores);
  const validCrews = filterValidCrew(crewScoreArray, relations[user]);
  const answer = getSortedCrews(validCrews);

  if (answer.length > 5) {
    answer.splice(5);
  }

  return answer;
}

module.exports = problem7;
