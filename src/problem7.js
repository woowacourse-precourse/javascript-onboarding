function problem7(user, friends, visitors) {
  const connected =  new Object();
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
