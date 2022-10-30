function problem7(user, friends, visitors) {
  const friendGroup = {};
  const recommendScore = {};

  for (const [nameA, nameB] of friends) {
    friendGroup[nameA] = (friendGroup[nameA] || new Set()).add(nameB);
    friendGroup[nameB] = (friendGroup[nameB] || new Set()).add(nameA);
  }

  const directFriends = friendGroup[user];

  for (const [name, friendSet] of Object.entries(friendGroup)) {
    for (const friend of friendSet) {
      if (directFriends.has(friend)) {
        recommendScore[name] = (recommendScore[name] || 0) + 10;
      }
    }
  }

  for (const visitor of visitors) {
    recommendScore[visitor] = (recommendScore[visitor] || 0) + 1;
  }

  return Object.keys(recommendScore)
    .filter(
      (name) =>
        recommendScore[name] && !directFriends.has(name) && name !== user
    )
    .sort((nameA, nameB) => {
      const score1 = recommendScore[nameB];
      const score2 = recommendScore[nameA];

      if (score1 > score2) return 1;
      if (score1 < score2) return -1;
      if (nameA > nameB) return 1;
      return nameA < nameB ? -1 : 0;
    })
    .slice(0, 5);
}

module.exports = problem7;
