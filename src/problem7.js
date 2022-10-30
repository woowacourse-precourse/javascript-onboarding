function problem7(user, friends, visitors) {
  let userSet = new Set();
  friends.map((it) => userSet.add(it[0]).add(it[1]));
  visitors.map((it) => userSet.add(it));
  const userList = [...userSet];

  let adjList = {};

  for (let i = 0; i < userList.length; i++) {
    adjList[userList[i]] = [[], 0];
  }

  for (let i = 0; i < friends.length; i++) {
    adjList[friends[i][0]][0].push(friends[i][1]);
    adjList[friends[i][1]][0].push(friends[i][0]);
  }

  adjList["mrko"][0].map((it) => {
    adjList[it][0].map((it) => {
      if (it !== "mrko" && !adjList["mrko"][0].includes(it))
        adjList[it][1] += 10;
    });
  });

  visitors.map((it) => {
    if (!adjList["mrko"][0].includes(it)) adjList[it][1] += 1;
  });

  var sortList = [];
  for (var username in adjList) {
    sortList.push([username, adjList[username][1]]);
  }
  sortList.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else {
      return 1;
    }
  });

  let result = [];
  for (let i = 0; i < sortList.length && i < 5; i++) {
    if (sortList[i][1] != 0) {
      result.push(sortList[i][0]);
    }
  }
  return result;
}

module.exports = problem7;
