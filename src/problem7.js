/**
 * @param {string} user
 * @param {string[][]} friends
 * @param {string[]} visitors
 * @returns {string[]}
 */
function problem7(user, friends, visitors) {
  const bestFriends = [];

  friends.forEach((friend) => {
    if (friend.find((id) => id === user)) {
      bestFriends.push(user === friend[1] ? friend[0] : friend[1]);
    }
  });

  const recommandList = bestFriends.reduce((acc, friend) => {
    if (!acc[friend]) acc[friend] = [];

    for (let i = 0; i < friends.length; i++) {
      if (
        (friends[i][0] === friend && friends[i][1] !== user) ||
        (friends[i][1] === friend && friends[i][0] !== user)
      ) {
        acc[friend].push(friend === friends[i][1] ? friends[i][0] : friends[i][1]);
      }
    }

    return acc;
  }, {});

  const scoreById = {};

  for (const value of Object.values(recommandList)) {
    value.forEach((id) => {
      if (!scoreById[id]) scoreById[id] = 0;
      scoreById[id] += 10;
    });
  }

  visitors.forEach((visitor) => {
    if (!scoreById[visitor]) scoreById[visitor] = 0;

    scoreById[visitor] += 1;
  });

  const idByScore = {};

  for (const [key, value] of Object.entries(scoreById)) {
    if (bestFriends.find((id) => id === key)) continue;

    if (!idByScore[value]) idByScore[value] = [];
    idByScore[value].push(key);
  }

  const keys = Object.keys(idByScore);
  keys.sort((a, b) => b - a);

  const answer = [];
  keys.forEach((key) => {
    answer.push(...idByScore[key].sort());
  });

  return answer.splice(0, 5);
}

module.exports = problem7;
