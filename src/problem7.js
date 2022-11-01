function problem7(user, friends, visitors) {
  const connected =  new Object();
  for (relationship of friends) {
    const friend1 = relationship[0];
    const friend2 = relationship[1];
    setDefault(connected, friend1, friend2);
    setDefault(connected, friend2, friend1);
  }
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

module.exports = problem7;
