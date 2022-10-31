const problem7 = (user, friends, visitors) => {
  const relationShip = {};
  const relationScore = {};

  friends.forEach(([friendA, friendB]) => {
    relationShip[friendA] = relationShip[friendA]
      ? [...relationShip[friendA], friendB]
      : [friendB];
    relationShip[friendB] = relationShip[friendB]
      ? [...relationShip[friendB], friendA]
      : [friendA];
  });

  Object.keys(relationShip).forEach((person) => {
    if (person !== user) {
      relationScore[person] +=
        relationShip[person].filter((someone) =>
          relationShip[user].includes(someone)
        ).length * 10;
    }
  });

  visitors.forEach((visitor) => {
    relationScore[visitor] = relationScore[visitor] + 1 ?? 1;
  });

  return Object.keys(relationScore)
    .filter((existed) => !relationShip[user].includes(existed))
    .sort((a, b) => relationScore[b] - relationScore[a])
    .slice(0, 5);
};

module.exports = problem7;
