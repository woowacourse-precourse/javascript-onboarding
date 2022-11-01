function problem7(user, friends, visitors) {
  var answer;
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
    if(!(v in scoreObj)) {
      scoreObj[v] = 0;
    }
    console.log(v, scoreObj[v]);
    scoreObj[v]++;
  }

  console.log(scoreObj);


  return answer;
}

module.exports = problem7;
