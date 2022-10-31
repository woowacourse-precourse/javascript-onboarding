function filterValidCrew(crews, invalidCrews) {
  return crews.filter((crew) => !invalidCrews.includes(crew));
}

function filterValidScore(crewScores) {
  return crewScores.filter((crew) => crew[1] !== 0);
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

function getRelationScores(relations, crews, user) {
  const relationScores = crews.reduce((acc, cur) => {
    const acquaintances = relations[cur].filter((friend) =>
      relations[user].includes(friend)
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

function getCrewScores(user, relations, visitors) {
  const invalidCrews = [...relations[user], user];

  const validRelationCrews = filterValidCrew(
    Object.keys(relations),
    invalidCrews
  );
  const validVisitors = filterValidCrew(visitors, invalidCrews);

  const relationScores = getRelationScores(relations, validRelationCrews, user);
  const crewScores = addVisitorScores(validVisitors, relationScores);

  return crewScores;
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

  const crewScores = getCrewScores(user, relations, visitors);
  const crewScoreArray = Object.entries(crewScores);

  const validCrews = filterValidScore(crewScoreArray);
  const answer = getSortedCrews(validCrews);

  if (answer.length > 5) {
    answer.splice(5);
  }

  return answer;
}

module.exports = problem7;
