function problem7(user, friends, visitors) {
  const connected =  new Object();
  for (relationship of friends) {
    const friend1 = relationship[0];
    const friend2 = relationship[1];
    setDefault(connected, friend1, friend2);
    setDefault(connected, friend2, friend1);
  }
  console.log(connected);

  const score = new Object();
  for (follower of connected[user].values()) {
    for (person of connected[follower].values()) {
      if (person == user) {
        continue;
      }
      if (connected[user].has(person)) {
        continue;
      }
      if (score.hasOwnProperty(person)) {
        continue;
      }
      setDefaultScore(score, person, 10);
    }
  }
  console.log(score);

  for (visitor of visitors) {
    if (connected[user].has(visitor)) {
      continue;
    }
    setDefaultScore(score, visitor, 1);
  }
  console.log(score);
  
  var answer;
  return answer;
}

function setDefault(target, key, value) {
  if (target.hasOwnProperty(key)) {
    target[key].add(value);
    return target;
  }
  target[key] = new Set();
  target[key].add(value);
  return target;
}

function setDefaultScore(target, key, value) {
  if (target.hasOwnProperty(key)) {
    target[key] += 1;
    return target
  }
  target[key] = value;
}
module.exports = problem7;
