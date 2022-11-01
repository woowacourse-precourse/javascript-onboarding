function problem7(user, friends, visitors) {
  let answer = [];
  let friendSet = [];
  let othersSet = [];
  let scores = new Map();

  // user의 친구
  for (let i = 0; i < friends.length; ++i) {
    if (friends[i].includes(user)) {
      if (friends[i][0] === user) friendSet.push(friends[i][1]);
      else friendSet.push(friends[i][0]);
      } else {
      othersSet.push(friends[i]);
      }
    }

  others.forEach((elem) => {
    if (friendSet.includes(elem[0]))
      scores.set(elem[1], scores.get(elem[1]) + 10 || 10);
    if (friendSet.includes(elem[1]))
      scores.set(elem[0], scores.get(elem[0]) + 10 || 10);
  });
  
  visitors.forEach((elem) => {
    scores.set(elem, scores.get(elem) + 1 || 1);
  });
  
  friendSet.forEach((elem) => scores.delete(elem));
  
  const scoresArr = [...scores];
  scoresArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  for (let i = 0; i < scoresArr.length; ++i) {
    if (i === 5) break;
    if (scoresArr[i][1] === 0) break;
    answer.push(scoresArr[i][0]);
  }

  return answer;
}

module.exports = problem7;
