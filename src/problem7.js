const problem7 = (user, friends, visitors) => {
  let sortScore = {};
  let friendScore = {};
  let answer = [];
  const friendGraph = makeFriendsGraph(friends, user);
  findFriendOfFriend(friendGraph, user, friendScore);
  findVisitFriend(visitors, user, friendGraph, friendScore);
  for (let number in friendScore) {
    sortScore[number] = friendScore[number];
  }
  Object.keys(sortScore).map((friendName, idx) => {
    answer.push(friendName);
  });
  return answer;
};

//marko의 친구의 친구 = +10점 marko를 모르는데 구경했으면 1점
const findFriendOfFriend = (friendGraph, user, friendScore) => {
  let friendAndFriendOfFriend = bfs(user, friendGraph);
  friendAndFriendOfFriend.map((friend) => {
    if ((friend !== user) & !friendGraph[user].includes(friend))
      friendScore[friend] = 10;
  });
};

const findVisitFriend = (visitors, user, friendGraph, friendScore) => {
  visitors.map((visitor) => {
    if ((visitor !== user) & !friendGraph[user].includes(visitor)) {
      friendScore[visitor]
        ? (friendScore[visitor] += 1)
        : (friendScore[visitor] = 1);
    }
  });
};

const bfs = (start, graph) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들
  needVisit.push(start); // 노드 탐색 시작
  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

const makeFriendsGraph = (friends) => {
  friendGraph = {};
  friends.map((friend) => {
    const [start, end] = friend;
    friendGraph[start]
      ? friendGraph[start].push(end)
      : (friendGraph[start] = [end]);
    friendGraph[end]
      ? friendGraph[end].push(start)
      : (friendGraph[end] = [start]);
  });
  return friendGraph;
};
module.exports = problem7;
