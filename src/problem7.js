function problem7(user, friends, visitors) {
  var answer = [];
  let scoreObj = {};
  let knowUser = [];

  for (const [a, b] of friends) {
    scoreObj[a] = 0;
    scoreObj[b] = 0;
    if (a === user) {
      knowUser.push(b);
    } else if (b === user) {
      knowUser.push(a);
    }
  }

  for (const [a, b] of friends) {
    for (k of knowUser) {
      if (a === k && b !== user) {
        scoreObj[b] += 10;
      } else if (b === k && a !== user) {
        scoreObj[a] += 10;
      }
    }
  }

  for (const v of visitors) {
    if (!(v in scoreObj)) {
      scoreObj[v] = 0;
    }
    scoreObj[v]++;
  }

  let scores = Object.values(scoreObj);
  scores.sort(function (a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  });

  for (const [n, s] of Object.entries(scoreObj)) {
    for (let i = 0; i < scores.length; i++) {
      if (s === scores.sort()[i]) {
        answer.push(n);
      }
    }
  }

  answer = answer.filter(x => !knowUser.includes(x) && x !== user)
  answer = Array.from(new Set(answer));

  return answer;
}

module.exports = problem7;
