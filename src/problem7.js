const FRIEND_POINT = 10;
const VISITOR_POINT = 1;

function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendsGraph(friends);
}

function makeFriendsGraph(friends) {
  const graph = {};

  friends.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = [];
    graph[a].push(b);
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
  });

  return graph;
}

module.exports = problem7;
