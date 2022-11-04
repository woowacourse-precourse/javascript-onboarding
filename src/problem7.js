function problem7(user, friends, visitor) {
  const MAX_RECOMMENDATION = 5;

  const users = getUsers(friends, visitor);
  const userFriends = users[user]?.friends || [];

  const candidates = getCandidatesWhoCanBeRecommended(users, user, userFriends);
  const recommendedUsers = scoreCandidates(candidates, userFriends, visitor);
  const sortedUsers = recommendedUsers.sort(compareUser);

  return sortedUsers.map(({ name }) => name).slice(0, MAX_RECOMMENDATION);
}

function getUsers(friends, visitors) {
  const users = {};

  friends.forEach(([userA, userB]) => {
    users[userA] = createUser(users, userA, userB);
    users[userB] = createUser(users, userB, userA);
  });

  visitors.forEach((user) => {
    users[user] = createUser(users, user, null);
  });

  return users;
}

function createUser(users, userA, userB) {
  return {
    name: userA,
    friends: [...(users[userA]?.friends || []), userB].filter(
      (friend) => friend,
    ),
    score: 0,
  };
}

function getCandidatesWhoCanBeRecommended(users, user, userFriends) {
  const candidates = [];

  Object.values(users).forEach(({ name, friends, score }) => {
    if (userFriends.includes(name) || name === user) return;

    candidates.push({ name, friends, score });
  });

  return candidates;
}

function scoreCandidates(candidates, userFriends, visitors) {
  const FRIENDSHIP_POINT = 10;
  const VISIT_POINT = 1;

  const newCandidates = [];

  candidates.forEach(({ name, friends }) => {
    const knowTogetherCount = friends.filter((friend) =>
      userFriends.includes(friend),
    ).length;
    const visitCount = visitors.filter((visitor) => visitor === name).length;

    const score =
      knowTogetherCount * FRIENDSHIP_POINT + visitCount * VISIT_POINT;

    if (score > 0) newCandidates.push({ name, score });
  });

  return newCandidates;
}

function compareUser(a, b) {
  if (a.score === b.score) {
    if (a.name === b.name) return 0;

    return a.name > b.name ? 1 : -1;
  }

  return a.score > b.score ? -1 : 1;
}

module.exports = problem7;
