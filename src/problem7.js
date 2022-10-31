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

  const score = {};
  for (const value of Object.values(recommandList)) {
    value.forEach((id) => {
      if (!score[id]) score[id] = 0;
      score[id] += 10;
    });
  }

  visitors.forEach((visitor) => {
    if (!score[visitor]) score[visitor] = 0;

    score[visitor] += 1;
  });
}

module.exports = problem7;
