function problem7(user, friends, visitors) {
  var answer = solution(user, friends, visitors);
  return answer;
}

function getIntersections(A, B) {
  let results = [];
  A.forEach(a => {
    if (B.includes(a)) {
      results.push(a);
    }
  })
  return results;
}

function solution(user, friends, visitors) {
  let memo = {}
  friends.forEach(friend => {
    let [leftFriend, rightFriend] = friend;
    if (memo[leftFriend]) {
      memo[leftFriend].push(rightFriend);
    } else {
      memo[leftFriend] = [];
      memo[leftFriend].push(rightFriend);
    }
    if (memo[rightFriend]) {
      memo[rightFriend].push(leftFriend);
    } else {
      memo[rightFriend] = [];
      memo[rightFriend].push(leftFriend);
    }
  })
  memo[user].forEach(userFriend => {
    delete memo[userFriend];
  })
  let score = {};
  Object.keys(memo).forEach(key => {
    if (key !== user) {
      score[key] = getIntersections(memo[user], memo[key]).length * 10;
    }
  })
  visitors.forEach(visitor => {
    if (!memo[user].includes(visitor)) {
      if (score[visitor]) {
        score[visitor] += 1
      } else {
        score[visitor] = 1
      }
    }
  })
  let answer = Object.keys(score).sort((a, b) => {
    if (score[a] === score[b]) {
      return b - a;
    } else {
      return score[b] - score[a]
    }
  });
  return answer;
};
module.exports = problem7;