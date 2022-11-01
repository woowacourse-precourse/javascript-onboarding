function problem7(user, friends, visitors) {
  let nowFriends = [];
  let answer = {};

  for (let friend of friends) {
    if (friend.includes(user)) {
      if (friend !== user) {
        nowFriends.push(...friend);
      }
    }
    answer[friend[0]] = 0;
    answer[friend[1]] = 0;
  }

  for (let visitor of visitors) {
    answer[visitor] = visitors.filter((v) => v === visitor).length;
  }

  for (let friend of friends) {
    for (let now of nowFriends) {
      if (!friend.includes(user) && friend.includes(now)) {
        const knowTogether = friend.filter((v) => v !== now);
        answer[knowTogether] += 10;
      }
    }
  }
  for (let friend in nowFriends) {
    delete answer[nowFriends[friend]];
  }
  answer = Object.keys(answer).sort((a, b) => {
    if (answer[a] == answer[b]) {
      if (a < b) return -1;
      if (a > b) return 1;
    }
    return answer[b] - answer[a];
  });

  return answer;
}

module.exports = problem7;
