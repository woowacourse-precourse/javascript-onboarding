function problem7(user, friends, visitors) {
  var answer = [];
  var knowFriends = [];
  var Users = friends.reduce((acc, cur) => {
    if (
      !acc.find((item) => {
        if (item === cur[0]) {
          return item;
        }
      })
    ) {
      acc.push(cur[0]);
    }
    if (
      !acc.find((item) => {
        if (item === cur[1]) {
          return item;
        }
      })
    ) {
      acc.push(cur[1]);
    }
    if (cur[0] === user) {
      knowFriends.push(cur[1]);
    } else if (cur[1] === user) {
      knowFriends.push(cur[0]);
    }
    return acc;
  }, []);
  var dicUsers = Users.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, []);
  friends.map((items) => {
    knowFriends.map((item) => {
      if ((item === items[0]) & (items[1] !== user)) {
        dicUsers[items[1]] += 10;
      }
    });
    knowFriends.map((item) => {
      if ((item === items[1]) & (items[0] !== user)) {
        dicUsers[items[0]] += 10;
      }
    });
  });

  var newVisitors = visitors.filter((visitor) => {
    if (knowFriends.findIndex((f) => visitor === f) < 0) {
      return visitor;
    }
  });

  newVisitors.map((visitor) => {
    isNaN(dicUsers[visitor])
      ? (dicUsers[visitor] = 1)
      : (dicUsers[visitor] += 1);
  });
  var arrUsers = [];
  for (item in dicUsers) {
    if (dicUsers[item] > 0) {
      arrUsers.push({ name: item, score: dicUsers[item] });
    }
  }

  arrUsers.sort((a, b) => {
    if (b.score === a.score) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }
    return b.score - a.score;
  });
  var cnt = 1;
  for (var i = 0; i < arrUsers.length; i++) {
    if (cnt > 5 || arrUsers[i].score == 0) {
      break;
    }
    answer.push(arrUsers[i].name);
    cnt += 1;
  }
  return answer;
}

module.exports = problem7;
