const userObject = new Object();
const scoreObject = {};
function friendsCheck(user, friends) {
  friends.forEach((friend) => {
    if (!userObject.hasOwnProperty(friend[0])) {
      userObject[friend[0]] = [friend[1]];
    } else {
      userObject[friend[0]].push(friend[1]);
    }

    if (!userObject.hasOwnProperty(friend[1])) {
      userObject[friend[1]] = [friend[0]];
    } else {
      userObject[friend[1]].push(friend[0]);
    }
  });
  const userFriendList = userObject[user];
  for (const [key, value] of Object.entries(userObject)) {
    if (key !== user) {
      value.map((u) => {
        if (userFriendList.includes(u)) {
          scoreObject[key] =
            scoreObject[key] === undefined ? 10 : scoreObject[key] + 10;
        }
      });
    }
  }
}

function visitorsCheck(user, visitors) {
  visitors.map((v) => {
    if (!userObject[user].includes(v)) {
      scoreObject[v] = scoreObject[v] === undefined ? 1 : scoreObject[v] + 1;
    }
  });
}

function problem7(user, friends, visitors) {
  friendsCheck(user, friends);
  visitorsCheck(user, visitors);
  var answer = [];
  for (const [name, s] of Object.entries(scoreObject)) {
    answer.push([name, s]);
  }
  answer.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    }
  });
  const result = [];
  answer.map((data) => result.push(data[0])).slice(0, 5);
  return result;
}

module.exports = problem7;