function hasUserCheck(user, friends) {
  const excepts = new Set();
  for (let friend of friends) {
    if (friend.includes(user)) {
      excepts.add(friend[0] === user ? friend[1] : friend[0]);
    }
  }
  excepts.add(user);
  return excepts;
}

function frinedsScoreCalculator(friends, hasUser, scoreMap, scoreSet) {
  for (let user of friends) {
    if (user[0] === undefined || user[1] === undefined) continue;
    if (hasUser.has(user[0]) && !hasUser.has(user[1])) {
      let score = scoreMap.has(user[1]) ? scoreMap.get(user[1]) + 10 : 10;
      scoreMap.set(user[1], score);
      scoreSet.add(score);
    }
    if (hasUser.has(user[1]) && !hasUser.has(user[0])) {
      let score = scoreMap.has(user[0]) ? scoreMap.get(user[0]) + 10 : 10;
      scoreMap.set(user[0], score);
      scoreSet.add(score);
    }
  }
}
function visitorsScoreCalculator(visitors, hasUser, scoreMap, scoreSet) {
  for (let user of visitors) {
    if (user === undefined) continue;
    if (!hasUser.has(user)) {
      let score = scoreMap.has(user) ? scoreMap.get(user) + 1 : 1;
      scoreMap.set(user, score);
      scoreSet.add(score);
    }
  }
}

function findUser(answer, score, scoreMap) {
  let localArray = [];
  for (let [name, userScore] of scoreMap) {
    if (userScore === score) {
      localArray.push(name);
    }
  }
  localArray.sort();
  for (let i = 0; i < localArray.length; i++) {
    if (answer.length < 5) answer.push(localArray[i]);
    if (answer.length === 5) return answer;
  }
  return answer;
}

function problem7(user, friends, visitors) {
  const answer = [];
  const scoreMap = new Map();
  const scoreSet = new Set();
  const hasUser = hasUserCheck(user, friends);
  frinedsScoreCalculator(friends, hasUser, scoreMap, scoreSet);
  visitorsScoreCalculator(visitors, hasUser, scoreMap, scoreSet);
  const sortScore = [...scoreSet].sort((a, b) => b - a);
  for (let score of sortScore) {
    findUser(answer, score, scoreMap);
  }
  return answer;
}

module.exports = problem7;
