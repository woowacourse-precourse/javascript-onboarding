function problem7(user, friends, visitors) {
  // let graph = new Map();
  // friends.forEach((duo) => makeGraph(graph, duo));

  // let scoreList = new Map();
  // friendOfFriend(user, graph, scoreList);
  // score(user, graph, visitors, scoreList);

  return;
}

function makeGraph(vertex, duo) {
  for (let i = 0; i < duo.length; i++) {
    let tempSet = new Set();
    let name = duo[i];
    if (vertex.has(name)) {
      vertex.set(name, vertex.get(name).add(i ? duo[0] : duo[1]));
    } else {
      vertex.set(name, tempSet.add(i ? duo[0] : duo[1]));
    }
  }
}

function friendOfFriend(user, graph, scoreList) {
  [...graph.get(user)].forEach((friend) => {
    //friend는 user의 1차 친구
    [...graph.get(friend)].forEach((fof) => {
      if (fof !== user && !graph.get(user).has(fof)) scoreList.set(fof, 10);
    });
  });
}

module.exports = problem7;
