function problem7(user, friends, visitors) {
  let [friendList, scoreList] = scoreFriend(friends, user);
  scoreList = scoreVisitor(visitors, scoreList);

  let answer = Object.keys(scoreList).filter((name) => {
      return friendList[user].includes(name) || name === user ? false : true;
    }).map((name) => {
      return { name, score: scoreList[name] };
    });

  answer = answer.sort(function (fir, se) {
      sortAnswer(fir.score, se.score)
    })
  return answer.map((item) => item.name);
}

function scoreVisitor(visitors, scoreList) {
  visitors.forEach((visitor) => {
      scoreList[visitor] ? scoreList[visitor] += 1 : scoreList[visitor] = 1;
  });
  return scoreList;
}

function scoreFriend(friends, user) {
  const friendList = {};
  const scoreList = {};
  
  friends.forEach((arr, i) => {
      scoreList[arr[0]] = 0;
      scoreList[arr[1]] = 0;
      friendList[arr[0]] ? (friendList[arr[0]].push(arr[1])) : friendList[arr[0]] = [arr[1]];
      friendList[arr[1]] ? (friendList[arr[1]].push(arr[0])) : friendList[arr[1]] = [arr[0]];
    })

  if (friendList[user]) {
    friendList[user].forEach((rel) => {
      friendList[rel].forEach((one) => {
        scoreList[one] += 10;
      });
    });
  }
  return [friendList, scoreList];
}

function sortAnswer(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}

module.exports = problem7;