function problem7(user, friends, visitors) {
  var answer;
  var dic = {};
  var already_friend = [];

  for (var i in friends) {
    if (friends[i][1] == user) {
      already_friend.push(friends[i][0]);
    } else if (friends[i][0] == user) {
      already_friend.push(friends[i][1]);
    }
    push_friend(dic, friends[i][0], friends[i][1]);
    push_friend(dic, friends[i][1], friends[i][0]);
  }
  var people = Object.keys(dic);
  for (var i in people) {
    for (var j in dic[people[i]][1]) {
      var friend = dic[people[i]][1][j];
      if (friend == user) {
        continue;
      }
      dic[friend][0] += 10;
    }
  }

  for (var i in visitors) {
    push_visitor(dic, visitors[i]);
  }

  dic = pop_zeroscore(dic);

  score_sorted = Object.entries(dic).sort((prev, cur) => {
    if (prev[1][0] < cur[1][0]) return 1;
    if (prev[1][0] > cur[1][0]) return -1;
    if (prev[0] > cur[0]) return 1;
    if (prev[0] < cur[0]) return -1;
  });

  var score_filtered = [];
  for (var i in score_sorted) {
    if (already_friend.includes(score_sorted[i][0])) {
      continue;
    }
    score_filtered.push(score_sorted[i][0]);
  }

  answer = score_filtered;
  return answer.slice(0, 5);
}

function push_friend(dic, x, y) {
  if (!dic[x]) {
    dic[x] = [0, [y]];
  } else {
    dic[x][1].push(y);
  }
}

function push_visitor(dic, x) {
  if (!dic[x]) {
    dic[x] = [1];
  } else {
    dic[x][0] += 1;
  }
}

function pop_zeroscore(dic) {
  var will_del = [];
  var list1 = Object.entries(dic);

  for (var i in list1) {
    if (list1[i][1][0] == 0) {
      will_del.push(list1[i][0]);
    }
  }

  for (var i in will_del) {
    delete dic[will_del[i]];
  }

  return dic;
}

module.exports = problem7;
