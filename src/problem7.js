function problem7(user, friends, visitors) {
  const connected =  new Object();
  for (relationship of friends) {
    const friend1 = relationship[0];
    const friend2 = relationship[1];
    setDefault(connected, friend1, friend2);
    setDefault(connected, friend2, friend1);
  }
  console.log(connected);

  const point = new Object();
  for (follower of connected[user].values()) {
    for (person of connected[follower].values()) {
      if (person == user) {
        continue;
      }
      if (connected[user].has(person)) {
        continue;
      }
      if (point.hasOwnProperty(person)) {
        continue;
      }
      setDefaultPoint(point, person, 10);
    }
  }
  console.log(point);

  for (visitor of visitors) {
    if (connected[user].has(visitor)) {
      continue;
    }
    setDefaultPoint(point, visitor, 1);
  }
  console.log(point);

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

function setDefaultPoint(target, key, value) {
  if (target.hasOwnProperty(key)) {
    target[key] += 1;
    return target
  }
  target[key] = value;
}
module.exports = problem7;
