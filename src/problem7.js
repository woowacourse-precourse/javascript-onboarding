function updateSheetByFriends(directFriends, friends, scoreSheet) {
  const newSheet = { ...scoreSheet };

  friends.forEach(([userA, userB]) => {
    if (directFriends.includes(userA) && directFriends.includes(userB)) return;

    if (directFriends.includes(userA))
      newSheet[userB] ?? true
        ? (newSheet[userB] = 10)
        : (newSheet[userB] += 10);
    else if (directFriends.includes(userB))
      newSheet[userA] ?? true
        ? (newSheet[userA] = 10)
        : (newSheet[userA] += 10);
  });

  return newSheet;
}

function updateSheetByVisitors(directFriends, visitors, scoreSheet) {
  const newSheet = { ...scoreSheet };

  visitors.forEach((visitor) => {
    if (directFriends.includes(visitor)) return;

    newSheet[visitor] ? (newSheet[visitor] += 1) : (newSheet[visitor] = 1);
  });

  return newSheet;
}

function getDirectFriends(user, friends) {
  const directFriends = [];

  friends.forEach((relationship) => {
    relationship.includes(user) &&
      directFriends.push(relationship[1 - relationship.indexOf(user)]);
  });

  return directFriends;
}

function formatScoreSheet(user, scoreSheet) {
  const newSheet = { ...scoreSheet };

  delete newSheet[user];

  return Object.entries(newSheet)
    .sort()
    .sort((userA, userB) => userB[1] - userA[1])
    .map(([user]) => user)
    .slice(0, 5);
}

function problem7(user, friends, visitors) {
  let scoreSheet = {};
  const directFriends = getDirectFriends(user, friends);

  scoreSheet = updateSheetByFriends(directFriends, friends, scoreSheet);
  scoreSheet = updateSheetByVisitors(directFriends, visitors, scoreSheet);
  scoreSheet = formatScoreSheet(user, scoreSheet);

  return scoreSheet;
}

module.exports = problem7;
