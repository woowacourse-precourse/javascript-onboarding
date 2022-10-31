function getRelations(friends) {
  const relations = friends.reduce((acc, cur) => {
    const [crewA, crewB] = cur;

    acc[crewA] = [...(acc[crewA] || []), crewB];
    acc[crewB] = [...(acc[crewB] || []), crewA];

    return acc;
  }, {});

  return relations;
}

function getRelationScores(user, relations) {
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

  const relationScores = getRelationScores(user, relations);
  const crewScores = addVisitorScores(visitors, relationScores);

  const crewScoreArray = Object.entries(crewScores);
  const validCrews = filterValidCrew(crewScoreArray, relations[user]);
  const answer = getSortedCrews(validCrews);

  if (answer.length > 5) {
    answer.splice(5);
  }

  return answer;
}

module.exports = problem7;
