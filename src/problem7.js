function problem7(user, friends, visitors) {
  let answer = [];
  let friendSet = [];
  let linkedSet = [];

  for (let i = 0; i < friends.length; i++) {
    if (!friends[i].includes(user)) {
      for (let j=0; j<2; j++) {
          score.set(friends[i][j], 10);
      }
  }
  else {
      for (let j=0; j<2; j++) {
          score.set(friends[i][j], 0);
      }
    }
  }

  
}

module.exports = problem7;
