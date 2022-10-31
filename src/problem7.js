function problem7(user, friends, visitors) {
  let answer;
  let score = {};
  let obj = friends.reduce((acc, cur) => {
    let key1 = cur[0];
    let key2 = cur[1];
    acc[key1] = [...(acc[key1] || []), cur[1]];
    acc[key2] = [...(acc[key2] || []), cur[0]];
    return acc;
  }, {});
  let userFriendList = obj[user]; // donut, shakevan
  for (let friend of Object.keys(obj)) {
    if (friend === user) {
      continue;
    }
    for (let friendList of obj[friend]) {
      for (let userFriend of userFriendList) {
        //
        if (friendList === userFriend) {
          score[friend] = (score[friend] || 0) + 10;
        }
      }
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    if (!Object.keys(score).includes(visitors[i])) {
      score[visitors[i]] = 1;
    } else {
      score[visitors[i]] = (score[visitors[i]] || 0) + 1;
    }
  }
  let sortScore = [];
  for (let name in score) {
    sortScore.push([name, score[name]]);
  }
  sortScore.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  sortScore = sortScore.filter((arr) => {
    return !userFriendList.includes(arr[0]);
  });
  answer = sortScore.map((arr) => arr[0]);
  if (answer.length > 5) {
    answer = answer.slice(4);
  }
  return answer;
}
module.exports = problem7;
