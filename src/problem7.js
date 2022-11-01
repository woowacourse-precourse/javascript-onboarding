function problem7(user, friends, visitors) {
  var sns = {};
  var temp = new Array();
  var answer = new Array();
  sns[user] = { score: 0, friends: [] };
  for (var i = 0; i < friends.length; i++) {
    make_connection(sns, friends[i][0], friends[i][1]);
  }
  for (friend of sns[user]["friends"]) {
    for (fof of sns[friend]["friends"]) {
      if (fof != user) sns[fof].score += 10;
    }
  }
  for (visit of visitors) visit_score(sns, visit);
  for (friend of sns[user]["friends"]) delete sns[friend];
  for (key of Object.keys(sns)) {
    if (sns[key].score > 0) temp.push({ name: key, score: sns[key].score });
  }
  var sortedSNS = temp.sort((a, b) => b.score - a.score);
  sortedSNS.sort((a, b) => {
    if (a.score == b.score) {
      let x = a.name;
      let y = b.name;
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    }
  });
  for (var i = 0; i < 5; i++) {
    if (i == sortedSNS.length) break;
    answer.push(sortedSNS[i].name);
  }
  return answer;
}

function make_connection(sns, idA, idB) {
  if (idA in sns) sns[idA]["friends"].push(idB);
  else sns[idA] = { score: 0, friends: [idB] };
  if (idB in sns) sns[idB]["friends"].push(idA);
  else sns[idB] = { score: 0, friends: [idA] };
}

function visit_score(sns, id) {
  if (id in sns) sns[id].score++;
  else sns[id] = { score: 1, friends: [] };
}

module.exports = problem7;
