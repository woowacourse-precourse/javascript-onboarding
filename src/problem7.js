function problem7(user, friends, visitors) {
  const connected =  new Object();
  for (relationship of friends) {
    const friend1 = relationship[0];
    const friend2 = relationship[1];
    setDefault(connected, friend1, friend2);
    setDefault(connected, friend2, friend1);
  }

  const point = new Map();
  for (follower of connected[user].values()) {
    for (person of connected[follower].values()) {
      if (person == user) {
        continue;
      }
      if (connected[user].has(person)) {
        continue;
      }
      setDefaultPoint(point, person, 5);
    }
  }

  for (visitor of visitors) {
    if (connected[user].has(visitor)) {
      continue;
    }
    setDefaultPoint(point, visitor, 1);
  }

  const answer = [...point];
  answer.sort(function (a, b) {
    if (b[1] == a[1]) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[0] == b[0]) return 0;
    }
    return b[1] - a[1];
  })
  
  const sortedAnswer = new Map(answer);
  return [...sortedAnswer.keys()];
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

function setDefaultPoint(target, key, value) {
  if (target.has(key)) {
    target.set(key, target.get(key) +value);
    return target
  }
  target.set(key, value);
}

module.exports = problem7;
