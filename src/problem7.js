function problem7(user, friends, visitors) {
  let answer = [];
  let scores = {};
  let friendGraph = {};
  friendGraph[user] = [];
  for (let i = 0; i < friends.length; i++) {
    if (!(friends[i][0] in friendGraph)) {
      friendGraph[friends[i][0]] = [];
      scores[friends[i][0]] = 0;
    }
    if (!(friends[i][1] in friendGraph)) {
      friendGraph[friends[i][1]] = [];
      scores[friends[i][1]] = 0;
    }
    friendGraph[friends[i][0]].push(friends[i][1]);
    friendGraph[friends[i][1]].push(friends[i][0]);
  }
  for (let friend in friendGraph) {
    for (let name in friendGraph[friend]) {
      if (
        friendGraph[user].includes(name) &&
        friendGraph[user].includes(friend)
      ) {
        scores[friend] += 10;
      }
    }
  }

  for (let visitor in visitors) {
    scores[visitor]++;
  }

  let max = 0;
  for (let name in scores) {
    if (max > scores[name]) max = scores;
  }

  for (let name in scores) {
    if (max === scores[name]) {
      answer.push(name);
    }
  }
  console.log(answer);
  return answer.sort();
}

module.exports = problem7;
