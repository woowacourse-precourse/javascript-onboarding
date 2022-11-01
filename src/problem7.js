function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendGraph(friends, user);
  const friendsScore = makeFriendScore(user, friendsGraph);
  addVisitScore(friendsScore, visitors);
  addNearFriendScore(friendsGraph, friendsScore);
  const validFriends = filterValidFriend(friendsScore, friendsGraph);
  const sortedFriends = sortFriends(validFriends, friendsScore);
  const top5Friends = sortedFriends.slice(0, 5);
  return top5Friends;
}

function makeFriendGraph(friends, user) {
  const friendsGraph = { USER: user };
  friends.forEach(([a, b]) => {
    if (!friendsGraph[a]) friendsGraph[a] = new Set();
    if (!friendsGraph[b]) friendsGraph[b] = new Set();
    friendsGraph[a].add(b);
    friendsGraph[b].add(a);
  });
  return friendsGraph;
}

function makeFriendScore(user, friendsGraph) {
  const userFriendsSet = friendsGraph[user] || new Set();
  const userArr = Object.keys(friendsGraph);
  const friendScore = {};
  userArr.forEach((name) => {
    if (name === "USER") return;
    if (name === user) return;
    if (userFriendsSet.has(name)) return;
    friendScore[name] = 0;
  });
  return friendScore;
}

function addVisitScore(friendScore, visitors) {
  visitors.forEach((name) => {
    if (!friendScore[name]) friendScore[name] = 0;
    friendScore[name] += 1;
  });
}

function addNearFriendScore(friendsGraph, friendScore) {
  const user = friendsGraph["USER"];
  const alreadyFriendsSet = friendsGraph[user] || new Set();
  const friendsArr = Object.keys(friendScore);
  friendsArr.forEach((name) => {
    if (alreadyFriendsSet.has(name)) return;
    if (!isNearFriend(name, friendsGraph)) return;
    friendScore[name] += 10;
  });
}

function isNearFriend(name, friendsGraph) {
  if (!friendsGraph[name]) return false;

  const user = friendsGraph["USER"];
  const userFriendsSet = friendsGraph[user] || new Set();
  const targetUserFriendsArr = [...friendsGraph[name]];
  return targetUserFriendsArr.some((name) => userFriendsSet.has(name));
}

function filterValidFriend(friendScore, friendsGraph) {
  const user = friendsGraph["USER"];
  const alreadyFriendSet = friendsGraph[user] || new Set();
  const friendsArr = Object.keys(friendScore);
  return friendsArr.filter(
    (name) => friendScore[name] > 0 && !alreadyFriendSet.has(name)
  );
}

function sortFriends(friends, friendsScore) {
  return friends.sort((a, b) => {
    const [scoreA, scoreB] = [friendsScore[a], friendsScore[b]];
    if (scoreA === scoreB) return a > b ? 1 : -1;
    return scoreB - scoreA;
  });
}

module.exports = problem7;
