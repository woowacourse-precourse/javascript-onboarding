const FRIEND_POINT = 10;
const VISITOR_POINT = 1;

function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendsGraph(friends);
  const twoDistanceFriends = getTwoDistanceFriends(user, friendsGraph);
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

function getTwoDistanceFriends(start, graph) {
  const visited = new Set();
  const queue = [];
  const result = [];

  queue.push([start, 0]);
  visited.add(start);

  while (queue.length > 0 && queue[0][1] < 3) {
    const [name, distance] = queue.pop();
    if (distance === 2) result.push(name);

    const friends = graph[name] || [];
    friends.forEach((friend) => {
      if (!visited.has(friend)) {
        queue.push([friend, distance + 1]);
        visited.add(friend);
      }
    });
  }

  return result;
}

module.exports = problem7;
